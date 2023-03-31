import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const TextGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [repeatTimes, setRepeatTimes] = useState("0");
  const [generatedText, setGeneratedText] = useState("");

  const TEN_THOUSAND = 10000;
  const onGenerateText = () => {
    if (parseInt(repeatTimes) > TEN_THOUSAND) {
      return toast.warn(`Repeated times maximum limited up to ${TEN_THOUSAND}`);
    }
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
        <div className="sm:col-span-4">
          <label
            htmlFor="Repeat Times"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Repeat Times { parseInt(repeatTimes) > TEN_THOUSAND && <span className='text-red-600'>(Maximum limit upto {TEN_THOUSAND})</span>}
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="number"
                value={repeatTimes}
                onChange={(e) => setRepeatTimes(e.target.value)}
                name="Repeat Times"
                id="Repeat Times"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="max limit up to 10,000"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="Repeat Times"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Enter Your text
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea
                name="RepeatTimes"
                id="RepeatTimes"
                rows={4}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type here..."
              ></textarea>
            </div>
          </div>
        </div>
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
        autoClose={1000}
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
