import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <Helmet>
                <title>About Us - Our Company</title>
            </Helmet>
            <div className="container mx-auto text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg">
                        Our mission is to provide exceptional real estate solutions, ensuring our clients find their ideal properties while enjoying a seamless and supportive experience.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-lg">
                        We are a dedicated team of real estate professionals with years of experience in the industry. Our commitment is to help clients make informed decisions, offering reliable guidance and support through each step of the property journey.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
                        <li>Customer Focus: Your needs are our priority.</li>
                        <li>Innovation: We embrace new technology to enhance your experience.</li>
                    </ul>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-lg">
                        Have questions? Reach out to us through our <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</a> page.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
