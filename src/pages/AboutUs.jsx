import Navbar from "../components/Navbar";
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <section className="text-center my-12">
          <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
        </section>
        <section className="flex flex-col md:flex-row items-center my-12">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-blue-600">
              “MindEase Healthcare” Providing The Best Opportunities For Health
              & Wellness Around The Globe.
            </h2>
            <p className="mt-4 text-gray-600">
              MindEase Healthcare is an organization dedicated to providing
              top-notch healthcare services. Our mission is to deliver quality
              care by combining the latest technology with a compassionate
              approach. We believe in a holistic approach to health and
              wellness, ensuring that our patients receive the best care
              possible.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 p-4 flex flex-col space-y-4">
            <img
              src="https://placehold.co/600x400"
              alt="Modern healthcare facility"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Healthcare professionals discussing"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
        <section className="my-12">
          <div className="flex justify-center space-x-4">
            <img src="https://placehold.co/100x50" alt="Partner logo 1" />
            <img src="https://placehold.co/100x50" alt="Partner logo 2" />
            <img src="https://placehold.co/100x50" alt="Partner logo 3" />
            <img src="https://placehold.co/100x50" alt="Partner logo 4" />
            <img src="https://placehold.co/100x50" alt="Partner logo 5" />
            <img src="https://placehold.co/100x50" alt="Partner logo 6" />
          </div>
        </section>
        <section className="my-12 text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Vision and mission
          </h2>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Vision</h3>
              <p className="mt-2 text-gray-600">
                To lead the people to a better and healthy experience.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Mission</h3>
              <p className="mt-2 text-gray-600">
                To provide everyone the support to live a healthier life through
                advanced medical care, applications that track health and
                wellness, and a holistic approach to health and well-being.
              </p>
            </div>
          </div>
        </section>
        <section className="my-12 text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Mind-body Approach to Achieve Mindfulness
          </h2>
          <p className="mt-4 text-gray-600">
            Take care of your mind and body. The impact of stress can be reduced
            by adopting a holistic approach which deals with daily stressors.
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <div className="text-center">
              <i className="fas fa-music text-4xl text-blue-600"></i>
              <p className="mt-2 text-gray-600">Meditation</p>
            </div>
            <div className="text-center">
              <i className="fas fa-dumbbell text-4xl text-blue-600"></i>
              <p className="mt-2 text-gray-600">Exercise</p>
            </div>
            <div className="text-center">
              <i className="fas fa-bed text-4xl text-blue-600"></i>
              <p className="mt-2 text-gray-600">Resting</p>
            </div>
            <div className="text-center">
              <i className="fas fa-book text-4xl text-blue-600"></i>
              <p className="mt-2 text-gray-600">Reading</p>
            </div>
            <div className="text-center">
              <i className="fas fa-brain text-4xl text-blue-600"></i>
              <p className="mt-2 text-gray-600">Counseling</p>
            </div>
          </div>
        </section>
        <section className="my-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <img
              src="https://placehold.co/600x400"
              alt="Healthcare professionals discussing"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-bold text-blue-600">
              The impact of using MindEase for meditation
            </h3>
            <p className="mt-4 text-gray-600">
              MindEase has been shown to reduce stress and improve overall
              well-being. Our users have reported a significant decrease in
              stress levels and an increase in overall happiness.
            </p>
            <div className="mt-4 flex space-x-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">41.4%</h4>
                <p className="text-gray-600">Reduction in stress</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">22.4%</h4>
                <p className="text-gray-600">Increase in happiness</p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-12 text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Want to establish business/organizational cooperation?
          </h2>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full">
            Contact Us
          </button>
        </section>
      </main>
    </div>
  );
};
export default AboutUs;
