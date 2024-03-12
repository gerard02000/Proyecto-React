import React, { useState } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleContactButtonClick = () => {
    setShowModal(true);
  };

  const handlePhoneClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = "tel:+1234567890";
    }
  };

  return (
    <section id="home" className="min-h-screen grid grid-cols-1 xl:grid-cols-7 gap-8 items-center justify-center mt-20"> {/* Ajuste del margen superior */}
      {/* Information */}
      <div className="md:col-span-5 p-8 xl:p-16 md:pl-16"> {/* Ajuste del padding lateral para pantallas medianas */}
        <div className="flex flex-col gap-8 items-center md:items-start">
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] text-center md:text-left mb-8"> {/* Ajuste del tamaño del texto y del margen inferior */}
            Welcome to CurtainCrafters
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl leading-[2.5rem] text-center md:text-left"> {/* Ajuste del tamaño del texto */}
            Your one-stop destination for quality curtains and window treatments. Let us transform your space with our elegant designs and superior craftsmanship.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8"> {/* Ajuste del margen superior */}
            <button onClick={handleContactButtonClick} className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-lg md:text-xl transition duration-300 transform hover:scale-105 focus:outline-none">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-lg md:text-xl transition duration-300 transform hover:scale-105 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-secondary text-primary p-2 rounded-full box-content" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.566 11.424l3.685-2.983c.536-.434.987-.194.987.562v5.962c0 .758-.452.999-.987.562l-3.685-2.983V16.5c0 .379-.167.5-.5.5a.498.498 0 0 1-.366-.166l-6-6a.499.499 0 0 1 0-.708l6-6a.5.5 0 0 1 .707 0c.2.201.293.472.293.708v4.038zM13 2.5c0-.379.167-.5.5-.5.133 0 .267.044.366.134l6 5.999c.387.389.387 1.022 0 1.414l-6 5.999a.498.498 0 0 1-.366.134.5.5 0 0 1-.5-.5V8.966l-5.293 4.293a.5.5 0 0 1-.707-.708l6-6a.498.498 0 0 1 .707 0l6 6a.5.5 0 0 1 0 .708.5.5 0 0 1-.707 0L13 8.966v-6.966z" />
              </svg>{" "}
              Watch our <br /> introduction video
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-2 md:col-start-6"> {/* Ajuste de la columna de la imagen */}
        <div className="w-full mx-auto max-w-[350px]">
          <img
            src="/courtain.jpg"
            alt="Curtains"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="bg-primary text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <button onClick={() => setShowModal(false)} className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.707 9.293l4-4a1 1 0 1 0-1.414-1.414l-4 4-4-4a1 1 0 1 0-1.414 1.414l4 4-4 4a1 1 0 0 0 1.414 1.414l4-4 4 4a1 1 0 0 0 1.414-1.414l-4-4z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img src="/cc.png" alt="Logo" className="w-10 h-10 mr-2" />
                <div>
                  <p className="text-gray-800 font-medium">Curtain Crafters</p>
                  <p>Email: info@example.com</p>
                  <p>Phone: <a href="tel:+1234567890" onClick={handlePhoneClick} className="text-primary hover:underline">+1234567890</a></p>
                  <p>Address: 123 Street, City, Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
