# Food API

Welcome to our Food API! This API allows you to access information about various food categories and products. You can use it to retrieve details about different food items, manage categories, and much more.

## Getting Started

To get started with the Food API, follow these simple steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
    ```
    git clone https://github.com/fahad0samara/node-SavorAPI-food-
    ```

2. **Install Dependencies**: Navigate to the project directory and install the dependencies using npm:
    ```
    cd food-api
    npm install
    ```

3. **Set Up Environment Variables**: Create a `.env` file in the root directory and add the necessary environment variables. You may need to set up variables such as database connection strings, API keys, etc.

4. **Run the Server**: Start the server by running the following command:
    ```
    npm start
    ```

5. **Explore the API**: Once the server is running, you can explore the available endpoints by visiting `http://localhost:3000` in your browser or using tools like Postman.

## API Endpoints

- **GET /categories**: Retrieve all food categories.
- **GET /products**: Retrieve all food products without pagination.
- **GET /products?page=1&pageSize=10**: Retrieve food products with pagination support.
- **GET /products/:id**: Retrieve a single food product by its ID.
- **POST /products**: Create a new food product. Include the required JSON data in the request body.
- **PUT /products/:id**: Update an existing food product by its ID. Include the required JSON data in the request body.
- **DELETE /products/:id**: Delete an existing food product by its ID.

## Contributions

We welcome contributions from the community to improve and expand our Food API. If you encounter any issues, have suggestions, or want to contribute new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
