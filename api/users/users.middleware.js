import jsonfile from 'jsonfile'
import Joi from 'joi'
import bcrypt from "bcrypt";

// import userDal from "./users.dal.js"

const saltRounds = 10;


// let data = userDal.users
// console.log(data)

let data = []

jsonfile.readFile('./data.users.json', (err, arr) => {
    if (err) console.error(err)
    data = arr
})


// jsonfile.readFile('/users.dal.js', (err, arr) => {
//     if (err) console.error(err)
//     data = arr
// })


const isAdmin = (req, res, next) => {
    const email = req.query.email
    const user = data.find(user => String(user.email) === email);
    if (user) {
        if (user.isAdmin) {
            next()
        } else {
            res.send('You are not a manager')
        }
    } else {
        res.send('The email entered is incorrect')
    }
}

const authorizedUser = (req, res, next) => {
    const { id } = req.params
    const email = req.query.email
    const user = data.find(user => user.email === email);
    if (user) {
        if (user.isAdmin || String(user.id) === id) {
            next()
        } else {
            res.send('You are not authorized')
        }
    } else {
        res.send('The email entered is incorrect')
    }
}

const selfUser = (req, res, next) => {
    const { id } = req.params
    const email = req.query.email
    const user = data.find(user => String(user.email) === email);
    if (user) {
        if (String(user.id) === id) {
            next()
        } else {
            res.send('You are not authorized')
        }
    } else {
        res.send('The email entered is incorrect')
    }
}

const validations = (req, res, next) => {

    const schema = Joi.object({
        password: Joi.string(),
        email: Joi.string(),
        id: Joi.string(),
    })
    const { password, email, id } = req.body
    const user = {
        password,
        email,
        id
    }
    const result = schema.validate(user);
    if (result.error) {
        res.send('לא סטרינג')
    } else {
        next()
    }
}

const passwordEncryption = (req, res, next) => {
    let { password } = req.body
    const hash = bcrypt.hashSync(password, saltRounds)
    req.body.password = hash
    next()
}

const middleware = {
    isAdmin,
    authorizedUser,
    selfUser,
    validations,
    passwordEncryption

}

export default middleware;
