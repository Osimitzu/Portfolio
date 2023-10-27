import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div
      // name="contact"
      className="w-full h-full bg-[#0a192f] px-4 md:px-20 flex justify-center items-center flex-col gap-5"
    >
      <div className="w-full">
        <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          Contact
        </p>
        <p className="text-gray-300 py-4">
          Feel free to send me an email, and I will respond as soon as possible.
        </p>
      </div>

      <form
        method="POST"
        action="https://getform.io/f/6f4fc7f5-3f75-4d67-9dcd-2410fbed0c8a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          // rows="10"
          placeholder="Message"
          required
          className="bg-[#ccd6f6] p-2 resize-none h-20"
        ></textarea>
        <div className="flex justify-center items-center w-full h-14">
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 flex justify-center items-center w-24 border-pink-600 lg:border-white transition-all duration-300">
            Submit
          </button>
        </div>
      </form>
      <div className="w-full lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
