import jsonfile from 'jsonfile';

interface User {
    id: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

let users: User[] = [];

jsonfile.readFile('./data.users.json', (err, arr) => {
    if (err) console.error(err);
    users = arr;
});

const getUsers = (): User[] => {
    return users;
};

const getUserById = (id: string): User | undefined => {
    const user = users.find(user => id === String(user.id));
    return user;
};

const addUser = (id: string, email: string, password: string, isAdmin: boolean): string => {
    const user: User = {
        id,
        email,
        password,
        isAdmin
    };
    users.push(user);
    return 'Registration has been successfully completed';
};

const login = (email: string, password: string): string => {
    const user = users.find(user => user.email === email);
    if (user) {
        if (user.password === password) {
            return 'Login was successful';
        } else {
            return 'The operation failed';
        }
    } else {
        return 'User does not exist';
    }
};

const putUser = (id: string, email: string, password: string, isAdmin: boolean): User | undefined => {
    const index = users.findIndex(user => user.id == id);
    users[index] = {
        id,
        email,
        password,
        isAdmin
    };
    return users[index];
};

const deleteUser = (id: string): string => {
    const index = users.findIndex(user => user.id == id);
    users.splice(index, 1);
    return 'The user has been deleted';
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

export default usersDal;
