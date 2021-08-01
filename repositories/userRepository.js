const userModel = require('../models/UserModel');


class userRepository {
    createNewUser(name, email, password) {
        const newUser = new userModel({name, email, password});
        return newUser;
    }

    async saveNewUser(newUser) {
        try {
            newUser.save();
        } catch (e) {
            throw e;
        }

    }
}

module.exports = userRepository;