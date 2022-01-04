import { getCantones } from "../controllers/canton.controller";


import { Router } from 'express';


const router = Router();






router.get('/:provincia', getCantones);



export default router;