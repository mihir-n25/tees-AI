import express from "express"

import * as dotenv from "dotenv";
// import { OpenAIApi} from 'openai'

dotenv.config();

const router = express.Router();

router.route('/').get((req,res) => {
    res.status(200).json({message : "hello from DallE routes"})
})

export default router;

