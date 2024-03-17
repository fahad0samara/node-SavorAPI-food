# E-Commerce Application

This repository contains the source code for an E-Commerce application built using Node.js, Express.js, MongoDB, and Mongoose. The application provides functionalities to manage products and categories, allowing users to browse, search, and purchase items.

## Features

- **Product Management**: Create, read, update, and delete products.
- **Category Management**: Manage product categories.
- **User Interaction**: Retrieve user-specific product recommendations based on IP address.
- **Pagination**: Supports pagination for browsing products.
- **File Upload**: Upload product images using Cloudinary.
- **Security**: Implements CORS, Helmet, and other security measures to protect against common web vulnerabilities.
- **Logging**: Logs HTTP requests using Morgan middleware.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/e-commerce-app.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file based on the provided `.env.example` file and configure the MongoDB connection URI.
4. Start the server: `npm start`
5. Access the application at [http://localhost:8080](http://localhost:8080) in your web browser.

## API Documentation

API endpoints are documented in the [API documentation](./API_DOCUMENTATION.md) file.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudinary
- CORS
- Helmet
- Morgan

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).



