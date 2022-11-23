import express from 'express';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import db from './config/database.js';
import authRoutes from './routes/AuthRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import subjectRoutes from './routes/SubjectRoutes.js';

const app = express();

// Enable form data reading
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CookieParser
app.use(cookieParser());

// Enable CSRF
// app.use(csrf({ cookie: true }));

// Connect to database
try {
    await db.authenticate();
    db.sync();
    console.log('Successfully connected to database');
} catch (error) {
    console.log(error);
}

// Routing
app.use('/auth', authRoutes);
app.use('/subjects', subjectRoutes);
app.use('/students', userRoutes);

// Set port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});