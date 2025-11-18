import React, { useState } from "react";
import CustomInput from "../../components/custom_input/custom_input";

const RegisterForm = ({ onSubmit }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  const [touched, setTouched] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = {
    name:
      touched.name && values.name.trim() === "" ? "Name is required." : null,
    email:
      touched.email && values.email.trim() === ""
        ? "Email is required."
        : touched.email && !emailRegex.test(values.email)
        ? "Please enter a valid email."
        : null,
    address:
      touched.address && values.address.trim() === ""
        ? "Address is required."
        : null,
    password:
      touched.password && values.password.trim() === ""
        ? "Password is required."
        : touched.password && values.password.length < 6
        ? "Password must be at least 6 characters."
        : null,
  };

  const isValid =
    values.name.trim() !== "" &&
    emailRegex.test(values.email) &&
    values.address.trim() !== "" &&
    values.password.length >= 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, address: true, password: true });
    if (!isValid) return;

    const payload = { ...values };
    if (typeof onSubmit === "function") {
      onSubmit(payload);
    }
    // For demo purposes
    console.log("RegisterForm submit:", payload);
  };

  return (
    <div className="w-full mt-10  flex items-center justify-center">
      <div className="flex flex-col w-full max-w-lg  border border-gray-200 p-8 shadow-xl rounded-2xl">
        <div className="register-form">
          <h2 className="register-form__title text-2xl font-bold mb-6">
            Create your account
          </h2>
          <form
            className="register-form__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="register-form__fields flex flex-col gap-4">
              <CustomInput
                name="name"
                label="Full name"
                placeholder="John Doe"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name || false}
                fullWidth
                inputClasses="w-full border border-gray-200"
              />

              <CustomInput
                name="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email || false}
                helperText={
                  !errors.email ? "We will never share your email." : undefined
                }
                fullWidth
              />

              <CustomInput
                name="address"
                label="Address"
                placeholder="123 Main St, City"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.address || false}
                fullWidth
              />

              <CustomInput
                name="password"
                type="password"
                label="Password"
                placeholder="••••••••"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password || false}
                helperText={
                  !errors.password ? "At least 6 characters." : undefined
                }
                fullWidth
              />
            </div>

            <div className="register-form__actions">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition mt-5"
                disabled={!isValid}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
