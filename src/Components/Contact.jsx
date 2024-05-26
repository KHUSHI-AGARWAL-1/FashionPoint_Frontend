import React from 'react'
import NavBar from './NavBar';

function Contact() {
    return (
        <div className="max-w-screen-lg mx-auto p-8">
            <NavBar/>
            <div className="text-center mt-20 mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to us.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input type="text" id="name" name="name" className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea id="message" name="message" rows="5" className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full py-3 px-6 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300 ease-in-out">Send Message</button>
                    </div>
                </form>
            </div>
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4">You can also reach us at:</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Email: <a href="mailto:info@fashionpoint.com" className="text-pink-600 underline">info@fashionpoint.com</a></p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Phone: +123 456 7890</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Address: 123 Fashion Street, Trendy City, FashionLand</p>
            </div>
        </div>
    );
}

export default Contact