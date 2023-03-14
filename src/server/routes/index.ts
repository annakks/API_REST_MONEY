import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { UserController } from "./../controllers";

const router = Router();

router.get('/', (req, res) => {
    return res.send('Oi');
});

router.post('/user', UserController.create);

export {router};

