import React from "react";

function Input({ calculation }) {
  return (
    <div className="row mb-2">
      <div className="col-lg">
        <input
          className="w-100"
          type="text"
          placeholder="0"
          value={calculation}
          readOnly
        />
      </div>
    </div>
  );
}

export default Input;
