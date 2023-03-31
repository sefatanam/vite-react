import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useTextGenerator = () => {
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

  return {
    inputText,
    setInputText,
    repeatTimes,
    setRepeatTimes,
    generatedText,
    onGenerateText,
    onCopyText,
    scrollToTop,
    TEN_THOUSAND,
  };
};

export default useTextGenerator;
