import mongoose from 'mongoose';
const MongoString = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shivampanwar:asdfghjkl@clustervoosh.j8yy2b0.mongodb.net/?retryWrites=true&w=majority&appName=ClusterVoosh', {
            useNewUrlParser: true,
        });
        console.log('MongoDB Connected');

    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

export default connectDB;