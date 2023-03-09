import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get('/', (req, res) => {
    return res.send('Oi');
});

router.post('/test', (req, res) => {
    console.log(req);

    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export {router};

