import React, { useState } from "react";
import CustomInput from "../../components/custom_input/custom_input";

const LoginForm = ({ onSubmit }) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = {
    email:
      touched.email && values.email.trim() === ""
        ? "Email is required."
        : touched.email && !emailRegex.test(values.email)
        ? "Please enter a valid email."
        : null,
    password:
      touched.password && values.password.trim() === ""
        ? "Password is required."
        : null,
  };

  const isValid =
    emailRegex.test(values.email) && values.password.trim() !== "";

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
    setTouched({ email: true, password: true });
    if (!isValid) return;

    const payload = { ...values };
    if (typeof onSubmit === "function") onSubmit(payload);
    // demo
    console.log("LoginForm submit:", payload);
  };

  return (
    <div className="w-full mt-10  flex items-center justify-center">
      <div className="flex flex-col w-full max-w-lg  border border-gray-200 p-8 shadow-xl rounded-2xl">
        <div className="login-form">
          <h2 className="login-form__title text-2xl font-bold mb-6">
            Welcome back
          </h2>
          <form className="login-form__form" onSubmit={handleSubmit} noValidate>
            <div className="login-form__fields flex flex-col gap-4">
              <CustomInput
                name="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email || false}
                fullWidth
                inputClasses="w-full border border-gray-200"
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
                fullWidth
              />
            </div>

            <div className="login-form__actions">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition mt-8"
                disabled={!isValid}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
