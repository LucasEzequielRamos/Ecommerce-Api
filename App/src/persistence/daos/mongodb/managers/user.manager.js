import * as utils from '../../../../utils.js'
import { userModel } from '../models/user.model.js';

export default class UserManagerMongo {

    async createUser(user) {
        try {
            const { email, password } = user;
            const existUser = await userModel.find({ email });
            if (existUser.length === 0) {
                console.log('nashe 1')
                const newUser = await userModel.create({ ...user, password: utils.createHash(password), role: email === 'lucas@gmail.com' ? 'admin' : 'user' });
                return newUser
            } else {
                console.log('nashe')
                return null;
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async loginUser(user) {
        try {
            const { email, password } = user;
            const userExist = await userModel.findOne({ email });
            const userIsValidPassword = userExist && utils.isValidPassword(userExist, password)
            if (userIsValidPassword) {
                return userExist
            } else {
                return null
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await userModel.findOne({ email })
            // console.log('mng', user)
            if (user) return user
            else return false
        } catch (error) {
            console.log(error)
        }
    }

    async getUserById(id) {
        try {
            const userExist = await userModel.findById(id)
            if (userExist) return userExist
            else return false
        } catch (error) {
            console.log(error)
        }
    }
}