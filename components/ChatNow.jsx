// components/ChatNow.jsx
import { FaWhatsapp } from "react-icons/fa";

const ChatNow = ({ phoneNumber, message = "Hello! I'm interested in your products." }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-2 rounded-full text-sm shadow-lg hover:bg-green-600 z-50 border border-white hover:border-green-600 transition-all flex items-center gap-2"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden sm:inline">Chat Now</span>
    </a>
  );
};

export default ChatNow;
