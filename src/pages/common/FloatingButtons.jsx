import React, { useContext } from 'react';
import { ScrollContext } from '../../assets/hooks/ScrollContext';
import { FaWhatsapp, FaPhone, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  const { formElement } = useContext(ScrollContext);

  const scrollToForm = () => {
    if (formElement.current) {
      formElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="fixed right-2 bottom-8 flex flex-col gap-2 bg-secondary_clr p-1 rounded-md">
      <Link to="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded-md shadow-md transition duration-300 hover:bg-green-600 border border-white">
        <FaWhatsapp size={20} />
      </Link>
      <Link to="tel:yourphonenumber" className="bg-primary_clr text-white p-2 rounded-md shadow-md transition duration-300 hover:bg-primary_clr-dark border border-white">
        <FaPhone size={20} className="rotate-90" />
      </Link>
      <button onClick={scrollToForm} className="bg-thired_clr text-white p-2 rounded-md shadow-md transition duration-300 hover:bg-green-600 border border-white">
        <FaQuoteRight size={20} />
      </button>
    </div>
  );
};

export default FloatingButtons;