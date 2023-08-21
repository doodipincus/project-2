// import fs from 'fs';
// import { promisify } from 'util';
import jsonfile from 'jsonfile'

let users = []

jsonfile.readFile('./data.users.json', (err, arr) => {
    if (err) console.error(err)
    users = arr
})


const getUsers = () => {
    return users
};

const getUserById = (id) => {

    const product = users.find(product => id === String(product.id));
    return product;
};

const addUser = (id, email, password, isAdmin) => {

    const user = {
        id,
        email,
        password,
        isAdmin
    }
    users.push(user)
    return 'Registration has been successfully completed'
};

// app.post('/login', async (req, res) => {
// const { email, password } = req.body;


const login = (email, password) => {
    const user = users.find(user => user.email === email);
    if (user) {
        // const result = bcrypt.compare(password, user.password);
        return 'Login was successful'
    }
}
//     try {

//         // console.log(user)

//             // console.log(result)
//             if (result) {
//                 res.send('User is connected');
//             } else {
//                 res.send('Wrong credentials');
//             }
//         } else {
//             res.send('User not found');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Server error');
//     }
// });

const putUser = (id, email, password, isAdmin) => {

    const index = users.findIndex(product => product.id == id);
    users[index] = {
        id,
        email,
        password,
        isAdmin
    }
    return users[index]
};

const deleteUser = (id) => {

    const index = users.findIndex(product => product.id == id);
    users.splice(index, 1)
    return 'The user has been deleted'
}


// const ChangeInOne = (id, quantity) => {

//     const index = data.findIndex(product => product.id == id);

//     // if(quantity === 'sold'){
//     //     data[index].quantity -= 1
//     // }else{
//     //     data[index].quantity += 1
//     // }

//     return data[index]
// };



const usersDal = {
    getUsers,
    getUserById,
    addUser,
    login,
    // isAdmin
    putUser,
    deleteUser,
    // ChangeInOne
};

export default usersDal;