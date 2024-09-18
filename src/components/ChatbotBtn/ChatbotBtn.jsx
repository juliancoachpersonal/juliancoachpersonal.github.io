import { useState } from "react";

export const ChatbotBtn = () => {

    const [isChatboxOpen, setIsChatboxOpen] = useState(false);

    const toggleChatbox = () => {
      setIsChatboxOpen(!isChatboxOpen);
    };

  return (

    <div>
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <button
        id="open-chat"
        className="bg-emerald-500 font-bold text-white py-2 px-4 rounded-full hover:bg-emerald-800 transition duration-300 flex items-center justify-center"
        onClick={toggleChatbox}
      >
        {/* <i className="fa-solid fa-robot mx-2 mb-1 text-lg"></i> */}
        <i className="fa-solid fa-message mx-2 mb-1 text-lg"></i>

        {isChatboxOpen ? "Cerrar Chat" : "Chatea con Jul(IA)n"}
      </button>
    </div>
    {isChatboxOpen && (
      <div
        id="chat-container"
        className="fixed bottom-16 right-4 w-[85%] md:w-96"
      >
        <div className="bg-emerald-500 shadow-md rounded-lg max-w-lg w-full z-50">
          <div className="p-4 border-b bg-emerald-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Jul<span className="text-[#ECFF46]">IA</span>n Bot Personal</p>
            <button
              id="close-chat"
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={toggleChatbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <iframe className="overflow-y-auto w-[100%] h-[300px] md:h-[330px]" src="https://landbot.site/v3/H-2191386-E7TJA5EK4BUQBTW9/index.html"></iframe>
          
          <div className="p-2 border-t">
            
          </div>
        </div>
      </div>
    )}
  </div>
     );
};
