import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import type { Group } from 'three';
import { MathUtils, MeshStandardMaterial, TOUCH } from 'three';

function Logo() {
    const { scene } = useGLTF('/base_basic_pbr.glb', '/draco/');
    const [scale, setScale] = useState(1.95);
    const rigRef = useRef<Group>(null);

    useEffect(() => {
        const updateScale = () => {
            const w = window.innerWidth;
            if (w >= 1200) setScale(1.95);
            else if (w >= 1000) setScale(1.75);
            else if (w >= 640) setScale(1.45);
            else setScale(1.25);
        };
        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    useEffect(() => {
        scene.traverse((child) => {
            if (!('material' in child)) return;
            const mesh = child as unknown as { material: MeshStandardMaterial | MeshStandardMaterial[] };
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            for (const mat of materials) {
                if (mat instanceof MeshStandardMaterial) {
                    mat.onBeforeCompile = (shader) => {
                        if (shader.fragmentShader.includes('glowMask')) return;
                        shader.fragmentShader = shader.fragmentShader.replace(
                            '#include <emissivemap_fragment>',
                            `#include <emissivemap_fragment>
                    float warmth = clamp(diffuseColor.r - diffuseColor.b, 0.0, 1.0);
                    float glowMask = smoothstep(0.12, 0.8, warmth);
                    totalEmissiveRadiance += diffuseColor.rgb * glowMask * 0.9;`
                        );
                    };
                    mat.needsUpdate = true;
                }
            }
        });
    }, [scene]);

    // Interactive mouse parallax tilt with smooth damping
    useFrame((state, delta) => {
        if (!rigRef.current) return;
        const targetY = state.pointer.x * 0.4;
        const targetX = -state.pointer.y * 0.3;
        rigRef.current.rotation.y = MathUtils.damp(rigRef.current.rotation.y, targetY, 3.2, delta);
        rigRef.current.rotation.x = MathUtils.damp(rigRef.current.rotation.x, targetX, 3.2, delta);
    });

    return (
        <group ref={rigRef}>
            <Float
                speed={2.2}
                rotationIntensity={0.35}
                floatIntensity={0.6}
                floatingRange={[-0.08, 0.08]}
            >
                <Center>
                    <primitive object={scene} scale={scale} />
                </Center>
            </Float>
        </group>
    );
}

export default function HeroLogo3D() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 6.4], fov: 45 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[0, 6, 2]} intensity={1.8} />
                <directionalLight position={[3, 4, 3]} intensity={0.7} />
                <directionalLight position={[-3, -2, -3]} intensity={0.3} />
                <Suspense fallback={null}>
                    <Logo />
                    <Environment preset="city" environmentIntensity={0.8} />
                </Suspense>
                <OrbitControls
                    target={[0, 0, 0]}
                    enablePan={false}
                    enableZoom={false}
                    touches={{ ONE: TOUCH.NONE, TWO: TOUCH.NONE }}
                    autoRotate
                    autoRotateSpeed={1.2}
                />
                <EffectComposer>
                    <Bloom mipmapBlur intensity={1.3} luminanceThreshold={0.35} luminanceSmoothing={0.25} radius={0.6} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/base_basic_pbr.glb', '/draco/');
