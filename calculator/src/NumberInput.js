import React from "react";

const onTypingNumber = (setter) => (e) => {
  const typingNumber = !Number.isNaN(Number(e.target.value));
  if (typingNumber) {
    setter(e.target.value);
  }
};

const onFormatNumber = (setter, value) => () => {
  const formatedValue = Number(value).toFixed(3);
  setter(formatedValue);
};

function NumberInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="input_center"
      value={`${value}`}
      onChange={onTypingNumber(onChange)}
      onBlur={onFormatNumber(onChange, value)}
    />
  );
}

export default NumberInput;
