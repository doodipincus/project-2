import fs from 'fs';
import { promisify } from 'util';

let data = ''

const productsObj = async () => {
    try {
        const readFileAsync = promisify(fs.readFile)
        const dataAsync = await readFileAsync('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);
        return jsonData
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
}

productsObj()
    .then(promise => data = promise)
    .catch(e => console.log(e))


const getProducts = () => {
    return data
};

const getProductById = (id) => {

    const product = data.find(product => id === String(product.id));
    return product;
};

const addProduct = (id, title, price, description, category, image, rating, quantity) => {

    const product = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity,
    }
    data.push(product)
    return data
};

const putProduct = (id, title, price, description, category, image, rating, quantity) => {

    const index = data.findIndex(product => product.id == id);
    data[index] = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity,
    }
    return data
};

const deleteProduct = (id) => {

    const index = data.findIndex(product => product.id == id);
    data.splice(index, 1)
}


const ChangeInOne = (id, quantity) => {

    const index = data.findIndex(product => product.id == id);
    data[index].quantity -= 1
    return data[index]
};

const productsDal = {
    getProducts,
    getProductById,
    addProduct,
    putProduct,
    deleteProduct,
    ChangeInOne
};

export default productsDal;