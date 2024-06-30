import express from "express"

import * as dotenv from "dotenv";
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env,
  });

router.route('/').get((req,res) => {
    res.status(200).json({message : "hello from DallE routes"})
})

export default router;

