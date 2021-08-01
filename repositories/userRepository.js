const userModel = require('../models/UserModel');


class userRepository {
    createNewUser(name, email, password) {
        const newUser = new userModel({name, email, password});
        return newUser;
    }

    async saveNewUser(newUser) {
        try {
            await newUser.save();
        } catch (e) {
            throw e;
        }

    }

    async findUserByEmailAndPassword(email, password) {
        const user = await userModel.find({email, password})
        return user;
    }
}

module.exports = userRepository;