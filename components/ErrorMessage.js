import React from "react";

function ErrorMessage({ error, visible }) {
  if (!visible) return null;

  return (
    <span className="text-red-500 text-center text-base mt-2">{error}</span>
  );
}

export default ErrorMessage;
