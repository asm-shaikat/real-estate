import { useLoaderData } from 'react-router-dom';

const EstateDetails = () => {
  const estate = useLoaderData();

  if (!estate) {
    return <p className="text-center text-red-600 font-semibold">Estate not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img
          src={estate.image}
          alt={estate.estate_title}
          className="w-full h-64 object-cover sm:h-80 md:h-96"
        />

        <div className="p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {estate.estate_title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {estate.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
              <span className="font-bold">Price:</span> {estate.price}
            </p>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
              <span className="font-bold">Status:</span> {estate.status}
            </p>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
              <span className="font-bold">Area:</span> {estate.area}
            </p>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-200 col-span-2 sm:col-span-1 md:col-span-3">
              <span className="font-bold">Location:</span> {estate.location}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Facilities:
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {estate.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
