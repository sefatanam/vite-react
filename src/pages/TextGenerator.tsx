import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const TextGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [repeatTimes, setRepeatTimes] = useState("0");
  const [generatedText, setGeneratedText] = useState("");

  const onGenerateText = () => {
    const repeatedTimesInputText = `${inputText} `.repeat(
      parseInt(repeatTimes)
    );
    setGeneratedText(repeatedTimesInputText);
  };

  const onCopyText = () => {
    window.navigator.clipboard.writeText(generatedText);
    toast.success("Text copied to your clipboard !");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (generatedText.length > 0) {
      setGeneratedText("");
    }
  }, [inputText, repeatTimes]);

  return (
    <div className="grid gap-4">
      <form className="grid gap-4">
        <label className="text-pink-600 text-lg text-center">
          Enter your text{" "}
        </label>
        <textarea
          rows={4}
          placeholder={"Type here..."}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border-none outline-none ring-2 ring-pink-600 focus:outline-blue-600 focus:ring-0"
        />
        <input
          placeholder="How many times..."
          type="number"
          value={repeatTimes}
          onChange={(e) => setRepeatTimes(e.target.value)}
          className="border-none ring-2 ring-pink-600 focus:outline-blue-600 focus:ring-0 p-2"
        />
        <button
          className="bg-pink-600 text-white p-2"
          type="button"
          onClick={onGenerateText}
        >
          Generate
        </button>
      </form>

      {generatedText.length > 0 && (
        <button onClick={onCopyText} className=" bg-pink-600 text-white p-2">
          Copy Text
        </button>
      )}

      <p className=" text-justify">{generatedText}</p>

      <div
        onClick={scrollToTop}
     
        title="Scroll to top button"
        className="fixed bottom-4 right-4 bg-pink-600 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-16 h-16 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={600}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TextGenerator;
