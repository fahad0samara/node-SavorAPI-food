import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductAddedImage from './assets/product.png'; // Import your product added image

const ProductAddedConfirmation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 rounded-xl shadow-xl w-96 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">{t('productAddedConfirmation.title')}</h2>
      <img 
        src={ProductAddedImage} 
        alt="Product Added" 
        className="h-80 w-72 object-cover rounded-t-xl" 
      />
      <p className="text-lg mb-8">
        {t('productAddedConfirmation.message')}
      </p>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-300 ease-in-out"
        >
          {t('productAddedConfirmation.addAnotherProduct')}
        </Link>
        <Link
          to="/List"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors duration-300 ease-in-out"
        >
          {t('productAddedConfirmation.goToProducts')}
        </Link>
      </div>
    </div>
  );
};

export default ProductAddedConfirmation;
