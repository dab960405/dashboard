import React, { useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ 
  label, 
  name, 
  value, 
  onChange, 
  type = "text", 
  autoFocus = false, 
  required = true,
  className = "",
  ...props 
}, ref) => {
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [autoFocus]);

  const inputElement = ref || inputRef;

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        ref={inputElement}
        type={type}
        name={name}
        value={value || ''}
        onChange={onChange}
        className={`w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none ${className}`}
        required={required}
        {...props}
      />
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;