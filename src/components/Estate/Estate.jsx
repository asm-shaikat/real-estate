import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Estate = () => {
  const [EstateData, setEstateData] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setEstateData(data));
  }, []);

  console.log(EstateData);

  return (
    <div className="w-full px-4 lg:px-0 mt-24 dark:bg-gray-900">
      <p className="text-2xl mb-4 text-gray-900 dark:text-gray-100">
        Rental Properties
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EstateData.map((estate) => (
          <div
            key={estate.id}
            className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src={estate.image}
              alt={estate.estate_title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {estate.estate_title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {estate.description}
            </p>
            <p className="text-lg font-semibold mt-2 text-gray-900 dark:text-gray-100">
              Price: {estate.price}
            </p>
            <Link to={`/estate/${estate.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  View Property
                </button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estate;
