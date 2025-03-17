import express from 'express';
import cors from 'cors';
import universityRoutes from './routes/universities.routes'; // Adjust path if needed

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Use university routes
app.use('/api', universityRoutes);

// Root route
app.get('/', (req, res) => {
    res.send(`API is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});