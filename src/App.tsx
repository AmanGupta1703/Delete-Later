import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const authStatus = false;

  useEffect(() => {
    if (!authStatus) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <>
      {/* <FormGroup>
        <Label htmlFor="email" label="Email Id: " />
        <Input
          name="email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </FormGroup>

      <Button onClick={() => console.log("Clicked...")}>Submit</Button>
      <Button type="secondary" onClick={() => console.log("Clicked...")}>
        Submit
      </Button> */}

      <h1>Home Page</h1>
    </>
  );
};

export default App;
