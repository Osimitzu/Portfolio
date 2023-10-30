import React from "react";
import Footer from "./Footer";

const Contact = ({ language }) => {
  return (
    <div
      // name="contact"
      className="w-full h-full px-4 lg:px-20 flex justify-center items-center flex-col gap-5"
    >
      <div className="w-full">
        <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-text500 dark:border-main400 transition-all duration-300">
          {language === "english" ? "Contact" : "Contacto"}
        </p>
        <p className="py-4 transition-all duration-300">
          {language === "english"
            ? "Feel free to send me an email, and I will respond as soon as possible."
            : "No dudes en enviarme un correo electrónico y te responderé lo antes posible."}
        </p>
      </div>

      <form
        method="POST"
        action="https://getform.io/f/6f4fc7f5-3f75-4d67-9dcd-2410fbed0c8a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <input
          type="text"
          placeholder={language === "english" ? "Name" : "Nombre"}
          name="name"
          required
          className="bg-main950 dark:bg-main50 transition-colors duration-300 p-2"
        />
        <input
          type="email"
          placeholder={language === "english" ? "Email" : "Correo"}
          name="email"
          required
          className="my-4 p-2 bg-main950 dark:bg-main50 transition-colors duration-300"
        />
        <textarea
          name="message"
          // rows="10"
          placeholder={language === "english" ? "Message" : "Mensaje"}
          required
          className="bg-main950 dark:bg-main50 transition-colors duration-300 p-2 resize-none h-20"
        ></textarea>
        <div className="flex justify-center items-center w-full h-14">
          <button className="border-2 flex justify-center items-center w-28 transition-all duration-300 px-6 py-2 hover:bg-text500 hover:border-text500 border-text500 lg:border-main950 dark:hover:bg-main900 dark:hover:border-main900 dark:border-main900 dark:lg:border-main50 text-lg">
            {language === "english" ? "Submit" : "Enviar"}
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
