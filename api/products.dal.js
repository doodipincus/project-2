// import products from '../data.json' assert {type: 'json'}
// const productsObj = JSON.parse(products)
import fs from 'fs';
import { promisify } from 'util';

const productsObj = async () => {
    try {
        const readFileAsync = promisify(fs.readFile)
        const dataAsync = await readFileAsync('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);
        return jsonData
    }catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
     
}

const write = async (arr) => {
    try {
        const jsonData = JSON.stringify(arr);
        // console.log(jsonData)
        const writeFileAsync = promisify(fs.writeFile)
        const dataAsync = await writeFileAsync('./data.json', jsonData);
        return dataAsync

    }catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
     
}
const getProducts = async () => {

    const dudi = await productsObj()
    return dudi
};

const getProductById = async (id) => {

    const dudi = await productsObj()
    const product = dudi.find(product => id === String(product.id));
    return product;
};

const addProduct = async (id, title, price, description, category, image, rating, quantity) => {
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
    const dudi = await productsObj()
    dudi.push(product)
    const x = await write(dudi)
    const y = await productsObj(x)
    return y
};

const putProduct = async (id, title, price, description, category, image, rating, quantity) => {
    const dudi = await productsObj()
    const index = dudi.findIndex(product => product.id == id);
    dudi[index] = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity,
    }
    const x = await write(dudi)
    const y = await productsObj(x)
    return y
};

const deleteProduct = async (id) => {

    const dudi = await productsObj()
    const index = dudi.findIndex(product => product.id == id);
    dudi.splice(index, 1)
    const x = await write(dudi)
    const y = await productsObj(x)
    return y
};

const ChangeInOne = async (id, quantity) => {

    const dudi = await productsObj()
    const index = dudi.findIndex(product => product.id == id);

    // console.log(`quantity is ${index.quantity}`)
    // if(quantity === (-1)){
    //     index.quantity--
    // }
    // if(quantity === (+1)){
    //     index.quantity++
    // }
    dudi[index].quantity -= 1
    const x = await write(dudi)
    const y = await productsObj(x)
    return y

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