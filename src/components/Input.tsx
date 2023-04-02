import { IInput } from '../interfaces/IInput';

function Input({ label, value, onChange, placeholder, children }: IInput) {
  return (
    <div className="grid">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
        {children}
      </label>
      <div className="mt-2 min-w-max">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input
            type="text"
            value={value}
            onChange={onChange}
            name={label}
            className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
