import { SubFamily } from '../../models/SubFamily'; // Import model SubFamily

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const subFamilyList = await SubFamily.findAll();
        return res.status(200).json(subFamilyList);
    } else if (req.method === 'POST') {
        const { name, family_id } = req.body;
        const newSubFamily = await SubFamily.create({ name, family_id });
        return res.status(201).json(newSubFamily);
    }
    return res.status(405).end(); // Method Not Allowed
}
