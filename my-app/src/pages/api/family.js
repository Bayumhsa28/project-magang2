import { Family } from '../../models/Family'; // Import model Family

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const familyList = await Family.findAll();
        return res.status(200).json(familyList);
    } else if (req.method === 'POST') {
        const { name, group_family_id } = req.body;
        const newFamily = await Family.create({ name, group_family_id });
        return res.status(201).json(newFamily);
    }
    return res.status(405).end(); // Method Not Allowed
}
