import dotenv from 'dotenv'

dotenv.config({
  path: './.env'
})

import app from './config/express.js'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';

const PORT = process.env.PORT || 8000;

connectDB();


app.use('/api', authRoutes);
app.use('/api', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
