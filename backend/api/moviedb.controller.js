import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const APILINK = process.env['APILINK'];
const SEARCHAPI = process.env['SEARCHAPI'];
const IMG_PATH = process.env['IMG_PATH'];

export default class MovieDBController {
    static async apiGetMovies(req, res, next) {
        try {
            let data = await axios.get(`${APILINK}`);
            res.send(
                {
                    response: data.data,
                    img_path: `${IMG_PATH}`
                }
            );
        
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetSearch(req, res, next) {
        try {
            let searchItem = req.params.q || {};
            let data = await axios.get(`${SEARCHAPI}+${searchItem}`);

            res.send(
                {
                    response: data.data,
                    img_path: `${IMG_PATH}`
                }
            );

        } catch (e) {
            res.status(500).json({ error: e });
        }
    }
}