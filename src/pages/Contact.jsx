import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="container mx-auto text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
                <p className="text-lg text-center mb-8">
                    We would love to hear from you! Please fill out the form below or contact us through our social media channels.
                </p>
                
                <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                rows="4"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="mb-2">Email: <a href="mailto:info@example.com" className="text-blue-600 dark:text-blue-400">info@example.com</a></p>
                    <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400">+123 456 7890</a></p>
                    <p>Follow us on social media:</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="text-blue-600 dark:text-blue-400">Facebook</a>
                        <a href="#" className="text-blue-600 dark:text-blue-400">Twitter</a>
                        <a href="#" className="text-blue-600 dark:text-blue-400">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
