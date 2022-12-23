import { Router } from 'express';
import Controller from '../Controllers/cars.controller';

const router = Router();

router.post('/', (req, res, next) => new Controller(req, res, next).create());
router.get('/', (req, res, next) => new Controller(req, res, next).getCars());
router.get('/:id', (req, res, next) => new Controller(req, res, next).getCarById());
router.put('/:id', (req, res, next) => new Controller(req, res, next).updateById());

export default router;