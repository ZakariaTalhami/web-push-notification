import dotenv from 'dotenv';
dotenv.config(); /** Must be run first */
import app from './app';
import { initWebpush } from './webpush';

initWebpush();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
