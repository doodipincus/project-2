import jsonfile from 'jsonfile'

let data = []

jsonfile.readFile('./data.products.json', (err, arr) => {
    if (err) console.error(err)
    data = arr
})


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

    const index = data.findIndex(product => String(product.id) === id);
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

    const index = data.findIndex(product => String(product.id) === id);
    data.splice(index, 1)
}


const ChangeInOne = (id, quantity) => {

    const index = data.findIndex(product => String(product.id) === id);
    const {sold} = quantity
    if(sold){
        data[index].quantity -= sold
    }else{
        data[index].quantity += 1
    }
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