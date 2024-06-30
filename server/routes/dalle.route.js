import express from "express"

import * as otenv from "dotenv";
import {Configuration , OpenAiApi} from 'openai'

dotenv.config();

const router = express.Router();

