import { ChangeEvent } from 'react';
import { toast } from 'react-toastify';

import Input from '../components/Input';
import ScrollTo from '../components/ScrollTo';
import TextArea from '../components/TextArea';
import Toaster from '../components/Toaster';
import useTextGenerator from '../hooks/TextGenerator.hook';

const TextGenerator = () => {
  const {
    inputText,
    setInputText,
    repeatTimes,
    setRepeatTimes,
    generatedText,
    onGenerateText,
    TEN_THOUSAND,
  } = useTextGenerator();

  const onCopyText = () => {
    window.navigator.clipboard.writeText(generatedText);
    toast.success("Text copied to your clipboard !");
  };

  return (
    <div className="grid gap-4">
      <form className="grid gap-4">
        <Input
          value={repeatTimes}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRepeatTimes(e.target.value)
          }
          placeholder="Max limit upto 10,000"
          label="Repeated Times"
        >
          {parseInt(repeatTimes) > TEN_THOUSAND && (
            <span className="text-red-600">
              (Maximum limit upto {TEN_THOUSAND})
            </span>
          )}
        </Input>
        <TextArea
          value={inputText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setInputText(e.target.value)
          }
          placeholder="Type here..."
          label="Enter your text"
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
      <ScrollTo to="TOP" />
      <Toaster />
    </div>
  );
};

export default TextGenerator;
