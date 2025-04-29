import { useState } from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Divider,
  Form,
  FormGroup,
  Input,
  Label,
  Checkbox,
  Socials,
} from "../../components";

type TFormData = {
  email: string;
  password: string;
  remember: boolean;
};

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [formData, setFormData] = useState<TFormData>({
    email: "",
    password: "",
    remember: false,
  });

  function handleEmailChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { value } = ev.target;

    if (!value) return;

    setEmail(value);
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;

    if (!value) return;

    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: name === "remember" ? !prevFormData.remember : value };
    });
  }

  return (
    <section className="h-full bg-slate-200 flex flex-col justify-center items-center space-y-6">
      <div className="bg-white w-xl py-6  px-14 rounded-lg">
        <Button type="secondary">Continue with Google/Microsoft</Button>

        <div className="mt-6 mb-4">
          <Form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-6">
              <FormGroup>
                <Label htmlFor="magicEmail" label="Magic Link Login" />
                <Input
                  placeholder="Enter your email"
                  name="magicEmail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormGroup>

              <Button>Send Magic Link</Button>
            </div>
          </Form>
        </div>

        <Divider />

        <div className="mt-7">
          <Form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-4">
              <FormGroup>
                <Label htmlFor="email" label="Email" />
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="robert.fox@myemail.com"
                  value={formData.email}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password" label="Password" />
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                  value={formData.password}
                />
              </FormGroup>

              <div className="flex justify-between items-center mb-10">
                <FormGroup className="flex items-center space-x-2">
                  <Checkbox name="remember" checked={formData.remember} onChange={handleChange} />
                  <Label label="Remember me" htmlFor="remember" />
                </FormGroup>

                <span role="button" className="text-blue-500 font-bold text-base">
                  Forgot Password?
                </span>
              </div>

              <Button>Login</Button>
            </div>
          </Form>
        </div>

        <div className="mt-4 flex flex-col space-y-2.5">
          <Divider />

          <Socials />

          <p className="text-center">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-blue-500 font-semibold">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
