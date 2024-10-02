
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560462931-04c235409a53?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Restaurant" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have any questions or feedback about our food or services? Feel free to reach out to us, and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Message"
                  rows="4"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-yellow-500 text-white rounded-lg py-2 font-semibold hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Section for Food Images */}
      <div className="max-w-4xl mx-auto my-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Food Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img 
            src="https://plus.unsplash.com/premium_photo-1723809628676-74ec4282970a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Food 1" 
            className="w-full h-60 object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1426869884541-df7117556757?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Food 2" 
            className="w-full h-60 object-cover rounded-lg"
          />
          <img 
            src="https://plus.unsplash.com/premium_photo-1669261883156-dbf93d00f42a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Food 3" 
            className="w-full h-60 object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Food 4" 
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
