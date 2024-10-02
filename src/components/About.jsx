import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-500">
            Welcome to our food ordering app, your go-to destination for delicious meals delivered right to your doorstep!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Food"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white">Delicious Food</h2>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              At our food ordering app, we are passionate about connecting people with the best local restaurants.
              Whether you're craving your favorite comfort food or exploring new cuisines, we make it easy to order
              your next meal with just a few taps.
            </p>
            <p className="mt-4 text-gray-600">
              Our mission is to provide a seamless and enjoyable food ordering experience, while supporting local
              businesses and delivering quality meals to our customers.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Wide variety of local restaurants</li>
              <li>Easy-to-use platform</li>
              <li>Fast and reliable delivery</li>
              <li>Secure and convenient payment options</li>
              <li>Excellent customer service</li>
            </ul>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1670002277040-9435ec0754c7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurant"
              className="w-full h-56 sm:h-72 object-cover"
            />
            
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-600">
                "The best food delivery app I’ve ever used! The selection of restaurants is amazing and the delivery is always on time."
              </p>
              <p className="mt-4 text-gray-900 font-bold">- Sarah M.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-600">
                "I love the user-friendly interface and the wide variety of food options. Customer service is also top-notch!"
              </p>
              <p className="mt-4 text-gray-900 font-bold">- Michael R.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-600">
                "From fast deliveries to delicious meals, this app has become a daily go-to for me and my family."
              </p>
              <p className="mt-4 text-gray-900 font-bold">- Laura W.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
