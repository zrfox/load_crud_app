import express from 'express'; // may not need this here
import dotenv from 'dotenv';
import path from 'path';
import { initializeApp } from 'firebase-admin/app';
import { cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import db from './utils/firebase/init-firebase';
import loadsRouter from './routes/loads';
import driversRouter from './routes/drivers';
import trucksRouter from './routes/trucks';
import shippersRouter from './routes/shippers';
import productsRouter from './routes/products';

// creates path from this file, otherwise npm run dev will use paths relative to terminal cwd
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/loads', loadsRouter);
app.use('/api/drivers', driversRouter);
app.use('/api/trucks', trucksRouter);
app.use('/api/shippers', shippersRouter);
app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});