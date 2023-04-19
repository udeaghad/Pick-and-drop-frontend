import { FC, ChangeEvent } from 'react';

interface InputProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputProps> = (props) => {
  const { id, label, name, placeholder, type, handleChange } = props;
  return( 
    <div className="mb-5">
      <label htmlFor={id} className="block text-sm font-medium leading-6">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={name}
        required
        className="relative block w-full rounded-t-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder} 
        onChange={handleChange}
        data-testid="input-field"       
      />
    </div>      
  )
}

export default InputField;