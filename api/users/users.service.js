import usersDal from './users.dal.js';

const getUsers = async () => {
    try {
        const products = await usersDal.getUsers();
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getUserById = async (id) => {
    try {
        const product = await usersDal.getUserById(id);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addUser = async (id, email, password, isAdmin) => {
    try {
        const flag = await usersDal.addUser(id,  email, password, isAdmin);
        return flag;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const login = async (email, password) => {
    try {
        const login = await usersDal.login(email, password);
        return login;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const putUser = async (id, email, password, isAdmin) => {
    try {
        const putUser = await usersDal.putUser(id, email, password, isAdmin);
        return putUser;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const deleteUser = async (id) => {
    try {
        const product = await usersDal.deleteUser(id);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

// const ChangeInOne = async (id, quantity) => {
//     try {
//         const product = await usersDal.ChangeInOne(id, quantity);
//         return product;
//     } catch (err) {
//         console.error('Error reading data:', err);
//         throw err;
//     }
// };
const productsService = {
    getUsers,
    getUserById,
    addUser,
    login,
    putUser,
    deleteUser,
    // ChangeInOne


};

export default productsService;