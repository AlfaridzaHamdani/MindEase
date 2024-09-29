import Navbar from "../components/Navbar";
import AboutUsSection from "../components/aboutSection";
import BrandSection from "../components/brandSection";
import VisiMisiSection from "../components/visiMisiSection";
import Story from "../components/storySection";
import CTA from "../components/ctaSection";
import Heading from "../components/heading";

const AboutUs = () => {
  return (
    <>
      <Heading />
      <Navbar />
      <AboutUsSection />
      <BrandSection />
      <VisiMisiSection />
      <Story />
      <CTA />
      {/* <div className="bg-white text-gray-800">
        <main className="max-w-6xl mx-auto p-6">
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
                  To provide everyone the support to live a healthier life
                  through advanced medical care, applications that track health
                  and wellness, and a holistic approach to health and
                  well-being.
                </p>
              </div>
            </div>
          </section>
          <section className="my-12 text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              Mind-body Approach to Achieve Mindfulness
            </h2>
            <p className="mt-4 text-gray-600">
              Take care of your mind and body. The impact of stress can be
              reduced by adopting a holistic approach which deals with daily
              stressors.
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
      </div> */}
    </>
  );
};
export default AboutUs;
