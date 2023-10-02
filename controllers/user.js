import userSechema from "../schema/userSechema.js";


export default class UserController {
    static async getUser(req, res) {

        res.sen(200).json({Correcto: "UserController"})
    }

    static async postCreateUser(req, res) {
        const {email, password, username } = req.body;

        const {error} = userSechema.validate({username, password, email})
        
        if(error) return res.send(400).json({Error: "Los datos brindados no cumplen con los requisitos necesarios para crear el usuario"});


        res.send(200).json({Correcto: "PostCreateUser"})
    }
}