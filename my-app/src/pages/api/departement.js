import { Departement } from '../../models/Departement'; // Import model Departement

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const departementList = await Departement.findAll();
        return res.status(200).json(departementList);
    } else if (req.method === 'POST') {
        const { name, divisi_id } = req.body;
        const newDepartement = await Departement.create({ name, divisi_id });
        return res.status(201).json(newDepartement);
    }
    return res.status(405).end(); // Method Not Allowed
}
