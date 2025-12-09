import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const SignOutPage = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      Logout Here
      <Button variant="danger" onClick={handleLogout}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutPage;
