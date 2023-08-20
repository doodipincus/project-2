import fs from 'fs';
// import morgan from 'morgan';

import { promisify } from 'util';

const getProducts = async (req, res) => {
    try {
        const readFileAsync = promisify(fs.readFile)
        const dataAsync = await readFileAsync('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);

        return jsonData

    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const getProductById = async (id) => {
    try {
        const readFileAsync = promisify(fs.readFile)
        const dataAsync = await readFileAsync('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);
        const product = jsonData.find(product => id === String(product.id));
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const addProduct = async (id, title, price, description, category, image, rating, quantity) => {
    try {
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
        const appendFileAsync = promisify(fs.appendFile)
        const dataAsync = await appendFileAsync('./data.json', product);
        // const add = dataAsync.push(product)

        return dataAsync
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const productsDal = {
    getProducts,
    getProductById,
    addProduct
};

export default productsDal;




