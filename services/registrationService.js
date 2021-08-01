


const userRepository = require('../repositories/userRepository')


class RegistrationService {

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
}


module.exports = new RegistrationService();