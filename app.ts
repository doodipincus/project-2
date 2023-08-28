import express from 'express';
import productsRouter from './api/product/products.router';
import usersRouter from './api/users/users.router';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});
