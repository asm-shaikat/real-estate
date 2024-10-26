const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Skyline Homes</h2>
                        <p className="text-sm">Bringing you the best properties.</p>
                    </div>


                    <div className="flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0">
                        <a href="#" className="hover:text-blue-400">Home</a>
                        <a href="#" className="hover:text-blue-400">About Us</a>
                        <a href="#" className="hover:text-blue-400">Contact</a>
                        <a href="#" className="hover:text-blue-400">Properties</a>
                    </div>
                </div>


                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-blue-400">Facebook</a>
                    <a href="#" className="hover:text-blue-400">Twitter</a>
                    <a href="#" className="hover:text-blue-400">Instagram</a>
                    <a href="#" className="hover:text-blue-400">LinkedIn</a>
                </div>


                <div className="mt-6">
                    <h4 className="text-lg font-semibold">Subscribe to our newsletter</h4>
                    <form className="flex justify-center mt-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>


                <div className="text-center mt-6">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
