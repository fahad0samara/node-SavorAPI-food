//@ts-nocheck
import { useDarkMode } from "./hooks/useDarkMode";

const ViewItem = ({ item, onClose }) => {
  const isDarkMode = useDarkMode();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
      <div className={`rounded-lg shadow-lg   ${isDarkMode ? "bg-gray-800 text-white shadow-xl" : "bg-gray-200  shadow-md"}
}`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold  mb-2">Product Details</h2>
          <p className="text-base mb-4">Here are the details of the selected item:</p>
          <hr className="border-gray-300 mb-4" />
          <div className="rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold ">Stock Quantity: {item.stockQuantity}</span>
        
                  {item.isNewProduct && (
                    <div>
                      <span className="inline-block bg-teal-200 text-teal-800 py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide">
                        New
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">Product Name: {item.name}</h3>
                <p className="text-base mb-4">Description: {item.description}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <p className="text-lg font-semibold  cursor-auto my-3">
                      price:
                      ${item.price}</p>
                    {item.originalPrice && (
                      <del>

                        <p className="text-sm text-gray-600 cursor-auto ml-2">${item.originalPrice}</p>
                      </del>
                    )}
                    <div className="ml-auto">
                      {item.discountPercentage && (
                        <div className="mb-2">
                          <span className="inline-block bg-yellow-200 text-yellow-800 py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide">
                            {item.discountPercentage}% Off
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Categories:</h3>
                  <ul className="text-base mb-4">
                    {item.categories.map((category) => (
                      <li key={category._id}>{category.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 w-full" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
