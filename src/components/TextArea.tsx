import { IInput } from '../interfaces/IInput';

function TextArea({ label, value, onChange, placeholder }: IInput) {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <textarea
            name={label}
            rows={4}
            value={value}
            onChange={onChange}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
