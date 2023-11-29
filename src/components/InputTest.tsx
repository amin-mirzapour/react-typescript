import React, { ChangeEvent, useState } from 'react';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<InputProps> = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

const MyParentComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update the state with the new input value
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>Enter text: </label>
      <MyInput value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default MyParentComponent;