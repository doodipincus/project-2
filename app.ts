import express from 'express';
import productsRouter from './api/product/products.router';
import usersRouter from './api/users/users.router';
import cors from 'cors'

const app = express();
const port = 3000;


const corsOptions = {
    origin: 'https://only-shop.onrender.com', // Replace with your actual frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions))

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});
