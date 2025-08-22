import express, { Router, Request, Response } from 'express';
const router = express.Router();

router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

export default router;
