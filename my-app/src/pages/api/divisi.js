import { Divisi } from '../../models/Divisi'; // Import model Divisi

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const divisiList = await Divisi.findAll();
        return res.status(200).json(divisiList);
    } else if (req.method === 'POST') {
        const { name } = req.body;
        const newDivisi = await Divisi.create({ name });
        return res.status(201).json(newDivisi);
    }
    return res.status(405).end(); // Method Not Allowed
}
