import React from "react";

function Spinner() {
  return (
    <>
        <div
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            id="spinner">
            <div
            className="spinner-border text-primary"
            role="status"
            style={{
                height: "3rem",
                width: "3rem",
            }}>
            <span className="sr-only">Loading...</span>
            </div>
        </div>
        </>
  );
}
export default Spinner;