import { GroupFamily } from '../../models/GroupFamily'; // Import model GroupFamily

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const groupFamilyList = await GroupFamily.findAll();
        return res.status(200).json(groupFamilyList);
    } else if (req.method === 'POST') {
        const { name, departement_id } = req.body;
        const newGroupFamily = await GroupFamily.create({ name, departement_id });
        return res.status(201).json(newGroupFamily);
    }
    return res.status(405).end(); // Method Not Allowed
}
