import React from "react";

function Button({ value, onClick }) {
  return (
    <div className="col-lg-3">
      <input
        className="w-100"
        type="button"
        value={value}
        onClick={() => onClick(value)}
      />
    </div>
  );
}

export default Button;
