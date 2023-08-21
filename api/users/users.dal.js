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

const login = (email, password) => {
    const user = users.find(user => user.email === email);
    if (user) {
        if (user.password === password) {
            return 'Login was successful'
        } else {
            return 'The operation failed'
        }
    } else {
        return 'User does not exist'
    }
}

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

const usersDal = {
    getUsers,
    getUserById,
    addUser,
    login,
    putUser,
    deleteUser,
    users
};

// export default users;
export default usersDal;