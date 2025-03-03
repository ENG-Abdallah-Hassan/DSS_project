const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");

//create express app
const app = express();
const port = 3000;

// Static folder
app.use(express.static(path.join(__dirname, "images")));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//call database function
const ConnectDataBase = require('./helper/DB');

//connect database
ConnectDataBase.db()

//controllers
const hotelRoutes = require('./Routes/hotel.router');
const bookingRoutes = require('./Routes/booking.router');
const userRoutes = require('./Routes/user.router');
const reviewRoutes = require('./Routes/review.router');
const contactRoutes = require('./Routes/contact.router');

//routes
app.use('/hotels', hotelRoutes);
app.use('/bookings', bookingRoutes);
app.use('/users', userRoutes);
app.use('/reviews', reviewRoutes);
app.use('/contacts', contactRoutes);

//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});