import express from "express"
import  * as dotenv from "dotenv"
import cors from "cors"

import dalleRoutes from "./routes/dalle.route.js"

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({limig : "50mb"}))

app.use('/api/v1/dalle' , dalleRoutes)

app.get('/' , (req,res) => {
    res.status(200).json({message : "hello world"})
})

app.listen(8080 , () => console.log('Server has started on 8080'))