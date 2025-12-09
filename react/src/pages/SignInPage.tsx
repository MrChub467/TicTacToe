import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const SignInPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      Please Sign In
      <Button variant="danger" onClick={handleLogin}>
        Sign In
      </Button>
    </div>
  );
};

export default SignInPage;
