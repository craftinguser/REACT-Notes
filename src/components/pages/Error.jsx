import React from "react";
import "../style/ErrorPage.css"
import { useRouteError,useNavigate  } from "react-router-dom";


const Error = () => {
  const navigate = useNavigate();
  const err = useRouteError();
  console.log("Error", err);

  const handleGoBack = () => {
    navigate("/"); 
  };

  return (
    <div className="error-page">
        
      <div className="error-container">
   
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">
        {err.status}:{err.statusText}<br/>
         The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <button className="error-btn" onClick={handleGoBack}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
