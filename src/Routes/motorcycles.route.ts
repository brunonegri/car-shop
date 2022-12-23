import { Router } from 'express';
import Controller from '../Controllers/motocycle.controller';

const router = Router();

router.post('/', (req, res, next) => new Controller(req, res, next).create());
router.get('/', (req, res, next) => new Controller(req, res, next).getMotorcycle());
router.get('/:id', (req, res, next) => new Controller(req, res, next).getMotorcycleById());
router.put('/:id', (req, res, next) => new Controller(req, res, next).updateById());

export default router;