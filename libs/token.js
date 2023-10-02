import jwt from "jsonwebtoken";

const secret = process.env.SECRET_PASSWORD;

export default class Token {
    static async createToken(payload) {
        return jwt.sign(payload,secret, {expiresIn: '1h'})
    }

    static async verifiedToken(token) {
        try{
            const decoded = jwt.verify(token,secret);
            return decoded
        } catch(e) {
            return false
        }
    }
}