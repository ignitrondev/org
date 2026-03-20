// Common API Service
const API_BASE = import.meta.env.VITE_MONITOR_API_BASE || 'http://localhost:3000';

export async function ping(host = '') {
    try {
        const url = host ? `${API_BASE}/api/ping?host=${encodeURIComponent(host)}` : `${API_BASE}/api/ping`;
        const res = await fetch(url);
        return await res.json();
    } catch (e) {
        console.error('Ping failed:', e);
        return { success: false, error: e.message };
    }
}

export async function getStats() {
    try {
        const res = await fetch(`${API_BASE}/api/all`);
        return await res.json();
    } catch (e) {
        console.error('Fetch stats failed:', e);
        return { success: false, error: e.message };
    }
}

export async function getVPSStats() {
    try {
        const res = await fetch(`${API_BASE}/api/vps`);
        return await res.json();
    } catch (e) {
        console.error('Fetch VPS stats failed:', e);
        return { success: false, error: e.message };
    }
}
