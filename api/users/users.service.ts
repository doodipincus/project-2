import usersDal from './users.dal';

const getUsers = async (): Promise<any> => {
    try {
        const users = await usersDal.getUsers();
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getUserById = async (id: string): Promise<any> => {
    try {
        const user = await usersDal.getUserById(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addUser = async (id: string, email: string, password: string, isAdmin: boolean): Promise<any> => {
    try {
        const flag = await usersDal.addUser(id, email, password, isAdmin);
        return flag;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const login = async (email: string, password: string): Promise<any> => {
    try {
        const loginResult = await usersDal.login(email, password);
        return loginResult;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const putUser = async (id: string, email: string, password: string, isAdmin: boolean): Promise<any> => {
    try {
        const updatedUser = await usersDal.putUser(id, email, password, isAdmin);
        return updatedUser;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const deleteUser = async (id: string): Promise<any> => {
    try {
        const deletedUser = await usersDal.deleteUser(id);
        return deletedUser;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const userService = {
    getUsers,
    getUserById,
    addUser,
    login,
    putUser,
    deleteUser,
};

export default userService;
