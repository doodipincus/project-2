import { log } from 'console';
import usersService from './users.service.js';

const getAllUsers = async (req, res) => {
    try {
        const products = await usersService.getUsers();
            return res.status(200).send(products)
    } catch (error) {
        console.error(error)
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await usersService.getUserById(id);
            return res.status(200).json(product)
    } catch (error) {
        console.error(error)
    }
};



const addUser = async (req, res) => {
    try {
        const {id, email, password, isAdmin} = req.body
        const flag = await usersService.addUser(id, email, password, isAdmin);
        if (flag){
             res.status(200).send(flag)
        }else{
            res.status(200).send('The operation failed')
        }
           
    } catch (error) {
        return res.status(400).send("Error")

    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const login = await usersService.login(email, password);
        if (login){
            res.status(200).send(login)
       }else{
           res.status(200).send('The operation failed')
       }
            // return res.status(200).send(login)
    } catch (error) {
        return res.status(400).send("Error")

    }
};

const putUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {email, password, isAdmin} = req.body
        const putUser = await usersService.putUser(id, email, password, isAdmin);

            return res.status(200).json(putUser)

    } catch (error) {
        console.error(error)
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const deleteProduct = await usersService.deleteUser(id);

        return res.status(200).json(deleteProduct)

    } catch (error) {
        console.error(error)
    }
};

// const ChangeInOne = async (req, res) => {
//     try {
//         const {id} = req.params;
//         // const quantity = req.body
//         const quantity = 0
//         const product = await usersService.ChangeInOne(id, quantity);
//             return res.status(200).json(product)
//     } catch (error) {
//         console.error(error)
//     }
// };
const productsController = {
    getAllUsers,
    getUserById,
    addUser,
    login,
    putUser,
    deleteUser,
    // ChangeInOne

};


export default productsController;