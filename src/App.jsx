import { useState } from "react";
import bgImg from "./assets/bg.avif";
function CharacterCounter() {
  const [message, setMessage] = useState("");
  const maxLength = 200;

  return (
    <div className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }} >
      <div className="shadow-lg rounded-2xl p-6 w-96"
        style={{ backgroundColor: "rgba(116, 67, 37, 0.5)" }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Type your message{" "}
          <span className="text-gray-800 text-sm">( 200 characters max )</span>
        </h2>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={maxLength}
          placeholder="Start typing..."
          className="w-full h-32 border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        ></textarea>

        <div className="flex justify-between items-center mt-2">
          <p className="text-md text-black-900">
            {message.length} / {maxLength} characters
          </p>

          {message.length >= maxLength && (
            <p className="text-sm text-red-500 font-semibold">⚠ Limit reached!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterCounter;
