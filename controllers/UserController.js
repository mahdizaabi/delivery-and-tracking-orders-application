
const userModel = require('../models/UserModel');
const UserService = require('../services/userService')

class RegistrationController {
    static async userRegistration(req, res) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).send("not found")
            return;
        }
        try {
            UserService.RegisterNewUser(name, email, password)
            res.status(200).send('succefull registration');
        } catch (error) {
            res.send(error.message, 400)
        }
    }
    static async UserLoging(req, res) {
        const { password, email } = req.body;
        try {
            const user = await UserService.userLoging(email, password);
            if (user.length > 0) {
                res.status(200).send(JSON.stringify(user[0]));
            } else {
                res.status(301).send("user not found")
            }
        } catch (error) {
            res.send(error.message, 400)
        }
    }
}


module.exports = RegistrationController