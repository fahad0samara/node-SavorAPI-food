import { Request, Response } from "express";
import { Category, Product } from "../models/productModel";
import { commonUploadOptions, handleCloudinaryUpload } from "./cloudinaryController";

// GET all categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
}

export const getAllProductsNoPagination = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
      .populate('categories', 'name');

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
};

// GET paginated products
export const getAllProducts = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10; // Use pageSize here

  try {
    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / pageSize);

    const products = await Product.find()
      .populate('categories', 'name')
      .skip((page - 1) * pageSize)
      .limit(pageSize); // Limit the number of products fetched by pageSize

    res.json({
      products,
      totalPages,
      currentPage: page,
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
};

// GET a single product by ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Internal server error",
    });
  }
};

// POST a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, originalPrice, discountPercentage, stockQuantity, isNewProduct, category, ingredients, allergens, servingSize, calories, cookingInstructions, dietaryRestrictions, expirationDate } = req.body;
    const userIP = req.ip;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await handleCloudinaryUpload(commonUploadOptions, req.file.buffer, res);
    if (!result) {
      return;
    }

    const product = new Product({
      name,
      description,
      price,
      image: result,
      originalPrice,
      discountPercentage,
      stockQuantity,
      isNewProduct,
      categories: [category],
      userIP,
      ingredients,
      allergens,
      servingSize,
      calories,
      cookingInstructions,
      dietaryRestrictions,
      expirationDate,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      error,
      message: "Internal server error",
    });
  }
};

// GET products for a specific user
export const getProductsByUser = async (req: Request, res: Response) => {
  try {
    const userIP = req.ip;
    console.log('User IP:', userIP)

    const products = await Product.find({ userIP });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
};

// PUT update a product by ID
export const updateProductById = async (req: Request, res: Response) => {
  try {
    const { name, description, price, originalPrice, discountPercentage, isNewProduct, categories, brands, stockQuantity, ingredients, allergens, servingSize, calories, cookingInstructions, dietaryRestrictions, expirationDate } = req.body;
    let updatedProduct: any;

    if (req.file) {
      const imageUri = await handleCloudinaryUpload(commonUploadOptions, req.file.buffer, res);
      if (!imageUri) {
        return;
      }

      updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          description,
          price,
          image: imageUri,
          originalPrice,
          discountPercentage,
          isNewProduct,
          categories,
          stockQuantity,
          ingredients,
          allergens,
          servingSize,
          calories,
          cookingInstructions,
          dietaryRestrictions,
          expirationDate,
        },
        { new: true }
      );
    } else {
      updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          description,
          price,
          originalPrice,
          discountPercentage,
          isNewProduct,
          categories,
          stockQuantity,
          ingredients,
          allergens,
          servingSize,
          calories,
          cookingInstructions,
          dietaryRestrictions,
          expirationDate,
        },
        { new: true }
      );
    }

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
};
