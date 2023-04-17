import { FC } from 'react';

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  onChange?: () => void;
}

const InputField: FC<InputProps> = (props) => {
  const { id, name, placeholder, type } = props;
  return(       
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={name}
        required
        className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}        
      />
  )
}

export default InputField;