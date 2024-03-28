import React from "react";
import image from "../../assets/06.jpg";

function Body() {
  const colors = ["bg-red-800", "bg-blue-800", "bg-green-800", "bg-yellow-800", "bg-purple-800", "bg-pink-800", "bg-indigo-800", "bg-gray-800"];
  const [messages, setMessages] = React.useState(
    [{ message: "Hello", user: "John", color: "bg-red-800" }, { message: "Hi", user: "I", color: "bg-blue-800" }, { message: "How are you?", user: "John", color: "bg-red-800" }, { message: "I am fine", user: "I", color: "bg-blue-800" }]);


  const handleSendMessage = () => {
    const message = document.getElementById("message").value;
    setMessages([...messages, { message: message, user: "I", color: colors[Math.floor(Math.random() * colors.length)]}]);
    document.getElementById("message").value = "";
  }

  return (
    <div
      className=" text-white flex-grow "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative flex flex-grow flex-col justify-center h-full items-center">
        <div className="absolute flex items-end h-full w-11/12 bg-gray-900 rounded-sm"></div>
        <div className="absolute flex items-end h-full w-11/12 border border-white rounded-sm">
          <div className="flex flex-col items-end gap-2 justify-center mx-2 w-screen h-full">
            <div className="-inline-flex flex-col w-full h-full overflow-y-auto">
              {messages.map((message, index) => {
                return (
                  <div className="flex items-center gap-2 w-full h-16 ps-2" key={index}>
                    <div
                      className={`flex justify-center items-center w-10 h-10 rounded-full ${
                        messages[messages.length - 1 - index].color
                      }`}
                    >
                        {messages[messages.length - 1 - index].user[0]}
                    </div>
                    <p>{messages[messages.length - 1 - index].message}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2 w-full items-center justify-center mb-1">
              <input
                id="message"
                type="text"
                className="bg-black w-11/12 px-3 rounded-md mb-1 border border-white"
              />
              <button className="mb-1" onClick={handleSendMessage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
