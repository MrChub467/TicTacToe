import Spinner from "react-bootstrap/Spinner";

const MatchMakingPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>Find you a game </h3>
      <Spinner variant="success" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default MatchMakingPage;
