import React, { forwardRef, useRef } from "react";

/**
 * CustomInput - a reusable input component
 *
 * Props:
 * - id, name, type
 * - label: string (optional) - renders a label linked to the input
 * - value, defaultValue: supports controlled or uncontrolled usage
 * - onChange, onBlur, onFocus
 * - placeholder
 * - disabled, required, readOnly
 * - error: boolean | string (string shows as error message)
 * - helperText: string (shown when no error string is provided)
 * - prefix, suffix: React nodes displayed inside the field wrapper
 * - className: container classes
 * - inputClassName: input element classes
 * - size: 'sm' | 'md' | 'lg' (default 'md')
 * - fullWidth: boolean
 * - autoComplete, autoFocus, maxLength, minLength, min, max, step, pattern, spellCheck
 * - ...rest: spread to the native input
 */
const CustomInput = forwardRef(function CustomInput(
  {
    id,
    name,
    type = "text",
    label,
    value,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    disabled = false,
    required = false,
    readOnly = false,
    error,
    helperText,
    prefix,
    suffix,
    className = "",
    inputClassName = "",
    size = "md",
    fullWidth = false,
    autoComplete,
    autoFocus,
    maxLength,
    minLength,
    min,
    max,
    step,
    pattern,
    spellCheck,
    ...rest
  },
  ref
) {
  const generatedIdRef = useRef(`ci-${Math.random().toString(36).slice(2, 9)}`);
  const inputId = id || generatedIdRef.current;
  const helperId = `${inputId}-helper`;
  const errorMsg = typeof error === "string" ? error : undefined;

  const containerClasses = [
    "custom-input",
    className,
    fullWidth ? "custom-input--full" : "",
    size ? `custom-input--${size}` : "",
    disabled ? "is-disabled" : "",
    error ? "has-error" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const fieldClasses = ["custom-input__field"].filter(Boolean).join(" ");

  const inputClasses = ["custom-input__input", inputClassName]
    .filter(Boolean)
    .join(" ");

  const describedBy =
    helperText || errorMsg ? helperId : rest["aria-describedby"];

  return (
    <div className={containerClasses}>
      {label ? (
        <label
          className="custom-input__label text-left w-full block mb-1"
          htmlFor={inputId}
        >
          {label}
          {required ? <span className="custom-input__required">*</span> : null}
        </label>
      ) : null}

      <div className={fieldClasses}>
        {prefix ? <span className="custom-input__prefix">{prefix}</span> : null}

        <input
          id={inputId}
          ref={ref}
          className={`${inputClasses} border rounded-lg px-3 py-2 outline-none  w-full
          ${error ? "border-red-500" : "border-gray-300"} 
          focus:ring-2 focus:ring-blue-500`}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          min={min}
          max={max}
          step={step}
          pattern={pattern}
          spellCheck={spellCheck}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy}
          {...rest}
        />

        {suffix ? <span className="custom-input__suffix">{suffix}</span> : null}
      </div>

      {helperText || errorMsg ? (
        <p
          id={helperId}
          className={`custom-input__helper ${
            error ? "is-error" : ""
          } text-left w-full block mt-1 text-red-500`}
        >
          {errorMsg || helperText}
        </p>
      ) : null}
    </div>
  );
});

export default CustomInput;
