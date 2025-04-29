import { useState } from "react";

import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button, Divider, Socials } from "../../components";

type TFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type TFormError = {
  email: string;
  password: string;
  confirmPassword: string;
};

type TFormInputName = keyof TFormData;

const initialState: TFormData = { email: "", password: "", confirmPassword: "" };
const initialFormErrors: TFormError = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState<TFormData>(initialState);
  const [formErrors, setFormErrors] = useState<TFormError>(initialFormErrors);

  function handleFormChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target as { name: TFormInputName; value: string };

    if (!value.length && value.length < 2) {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: `${name} is not valid.` }));
      setFormData((prevFormData) => ({ ...prevFormData, [name]: "" }));
    } else {
      setFormErrors(initialFormErrors);
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  }

  function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    let isFormEmpty = false;

    Object.entries(formData).forEach(([key, val]) => {
      if (val.trim() === "") {
        isFormEmpty = true;
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`,
        }));
      }
    });

    if (isFormEmpty) return;

    const { password, confirmPassword } = formData;

    if (password.length < 8 || confirmPassword.length < 8) {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        password: password.length < 8 ? "Password must be at least 8 characters long." : "",
        confirmPassword:
          confirmPassword.length < 8 ? "Password must be at least 8 characters long." : "",
      }));
      return;
    }

    if (password !== confirmPassword) {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        confirmPassword: "Passwords do not match.",
      }));
      return;
    }

    setFormErrors(initialFormErrors);

    console.log("Form submitted successfully:", formData);
  }

  return (
    <section className="h-full bg-slate-200 flex flex-col justify-center items-center space-y-6">
      <h1 className="text-2xl text-gray-600 font-semibold">Register for ReferralHub</h1>

      <div className="bg-white w-xl py-8 px-14 rounded-lg">
        <Form onSubmit={handleFormSubmit}>
          <div className="flex flex-col space-y-6">
            <FormGroup error={formErrors.email}>
              <Label htmlFor="email" label="Email Id" />
              <Input
                onChange={handleFormChange}
                value={formData.email}
                name="email"
                placeholder="robert.fox@myemail.com"
              />
            </FormGroup>

            <FormGroup error={formErrors.password}>
              <Label htmlFor="password" label="Create Password" />
              <Input
                type="password"
                onChange={handleFormChange}
                value={formData.password}
                name="password"
                placeholder="Enter password"
              />
            </FormGroup>

            <FormGroup error={formErrors.confirmPassword}>
              <Label htmlFor="confirmPassword" label="Confirm Password" />
              <Input
                type="password"
                onChange={handleFormChange}
                value={formData.confirmPassword}
                name="confirmPassword"
                placeholder="Re-enter password"
              />
            </FormGroup>

            <Button>Register</Button>
          </div>

          <div className="mt-6 flex flex-col space-y-4">
            <Divider />
            <Socials />
            <p className="text-gray-500 text-center">
              Already have an account?
              <Link to="/auth/login" className="text-blue-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Register;
