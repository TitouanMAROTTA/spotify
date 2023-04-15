import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Page not found</p>
        <button className="btn" onClick={() => navigate("/")}>
          Return to homepage
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
