import { useCallback, useState } from "react";

const Select = ({ options = [], defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const onSelectChanged = useCallback(event => {
    const { value } = event.target;

    setValue(value);
    onChange?.(value);
  }, []);

  return (
    <div className="relative">
      <select
        className="block px-4 py-3 pr-8 leading-tight text-gray-700 capitalize bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-gray-500"
        value={value}
        onChange={onSelectChanged}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
