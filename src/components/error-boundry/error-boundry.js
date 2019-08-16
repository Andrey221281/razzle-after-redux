import React, { useState, useEffect } from "react";
import ErrorIndicator from "../error-indicator";

const ErrorBoundry = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(true);
  });

  if (hasError) {
    return <ErrorIndicator />;
  }

  return { children };
};

export default ErrorBoundry;
