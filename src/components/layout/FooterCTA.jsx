import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const FooterCTA = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-[#121212] text-gray-300 flex justify-between z-50 md:hidden shadow-[0_-1px_4px_rgba(0,0,0,0.4)]">
    {/* CALL BACK */}
    <button
      className="flex-1 flex flex-col items-center justify-center py-3 active:bg-gray-800 hover:bg-gray-800 transition-colors"
      onClick={() => window.location.href = 'tel:+919876543210'} // Replace with your number
    >
      <Phone size={20} />
      <span className="text-[11px] mt-1 font-medium tracking-wide">CALL BACK</span>
    </button>

    {/* CALL US */}
    <button
      className="flex-1 flex flex-col items-center justify-center py-3 active:bg-gray-800 hover:bg-gray-800 transition-colors border-l border-gray-700"
      onClick={() => window.location.href = 'tel:+919876543210'} // Replace with your number
    >
      <Phone size={20} />
      <span className="text-[11px] mt-1 font-medium tracking-wide">CALL US</span>
    </button>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/919876543210?text=Hi%20Livio%20Team%2C%20I%20am%20interested%20in%20your%20projects."
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex flex-col items-center justify-center py-3 bg-[#1a1a1a] text-green-400 hover:bg-[#252525] active:bg-[#2d2d2d] transition-colors border-l border-gray-700"
    >
      <MessageCircle size={20} />
      <span className="text-[11px] mt-1 font-semibold tracking-wide">WHATSAPP</span>
    </a>
  </footer>
);

export default FooterCTA;
