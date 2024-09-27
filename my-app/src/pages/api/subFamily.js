// pages/api/sub_family.js
import { SubFamily } from '../../models/SubFamily'; // Import model SubFamily

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const subFamilyList = await SubFamily.findAll();
            return res.status(200).json(subFamilyList);
        } catch (error) {
            console.error('Error fetching sub-families:', error);
            return res.status(500).json({ message: 'Failed to retrieve sub-families.' });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, family_id } = req.body;

            // Validasi input
            if (!name || !family_id) {
                return res.status(400).json({ message: 'Name and family_id are required.' });
            }

            const newSubFamily = await SubFamily.create({ name, family_id });
            return res.status(201).json(newSubFamily);
        } catch (error) {
            console.error('Error creating sub-family:', error);
            return res.status(500).json({ message: 'Failed to create sub-family.' });
        }
    }
    
    return res.status(405).end(); // Method Not Allowed
}
