


const userRepository = require('../repositories/userRepository')

class UserService {

    constructor() {
        this.userRepository = new userRepository()
    }

    async RegisterNewUser(name, email, password) {
        const newUsr = this.userRepository.createNewUser(name, email, password)
        try {
            this.userRepository.saveNewUser(newUsr);
        }
        catch (e) {
            throw e;
        }
    }

    async userLoging(email, password) {
        const user = await this.userRepository.findUserByEmailAndPassword(email, password);
        return user
    }
}

module.exports = new UserService();