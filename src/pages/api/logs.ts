import {NextApiRequest, NextApiResponse} from "next";
import {addLog, getLogs} from "@/shared";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        addLog({
            url: req.body.url,
            time: new Date().toString(),
            extra: req.body.extra,
        })
        res.status(200).json({message: "Log added"})
    } else if (req.method === 'GET') {
        res.status(200).json(getLogs());
    } else {
        res.status(405).end(`Method ${req.method} not allowed`);
    }
}