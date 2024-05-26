import React from 'react'
import NavBar from './NavBar';

function About() {
    return (
        <div className="max-w-screen-2xl mx-auto md:px-20 px-4 py-10">
            <NavBar/>
            <div className="text-center mt-20 mb-10">
                <h1 className="font-semibold text-4xl pb-3">About FashionPoint</h1>
                <p className="text-lg text-gray-700">Your go-to destination for the latest fashion trends</p>
            </div>
            <div className=" space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700 dark:text-gray-300 " >
                        At FashionPoint, our mission is to provide the latest in fashion trends to our customers with the best quality and affordable prices. We believe that everyone deserves to look stylish and feel confident without breaking the bank.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
                    <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Founded in 2021, FashionPoint started as a small boutique with a passion for fashion. Over the years, we have grown into a full-fledged fashion brand with a dedicated team of designers, stylists, and fashion enthusiasts who work tirelessly to bring the latest styles to our customers.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Quality: We ensure that all our products are made from high-quality materials.</li>
                        <li>Affordability: We strive to keep our prices competitive and accessible.</li>
                        <li>Customer Satisfaction: We are dedicated to providing excellent customer service.</li>
                        <li>Innovation: We constantly update our collections to stay ahead of fashion trends.</li>
                        <li>Sustainability: We are committed to sustainable practices in our sourcing and manufacturing processes.</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
                    <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Our team is a blend of creative designers, savvy marketers, and dedicated customer service representatives. Together, we strive to make FashionPoint your preferred fashion destination.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We love to hear from our customers! If you have any questions, suggestions, or feedback, feel free to reach out to us at <a href="mailto:info@fashionpoint.com" className="text-pink-700 underline">info@fashionpoint.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About