// src/controllers/Content1Controller.js
export const fetchStores = async () => {
    try {
        const response = await fetch('/api/stores');
        if (!response.ok) throw new Error('Failed to fetch stores');
        return await response.json();
    } catch (error) {
        console.error('Error fetching stores:', error);
        return [];
    }
};

export const fetchItems = async (code) => {
    if (!code) return [];
    try {
        const response = await fetch(`/api/items?itemCode=${code}`);
        if (!response.ok) throw new Error('Failed to fetch items');
        return await response.json();
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
};
