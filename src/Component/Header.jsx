import React from "react";

const Header = () => {
  return (

    <nav className="navbar navbar-dark bg-dark">
      <div>
        <span className="navbar-brand mb-0 h1 mx-3">Task Management Application</span>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-light mx-3"
          data-bs-toggle="modal"
          data-bs-target="#taskmodal"
        >
          Add Task
        </button>
      </div>
    </nav>
  );
};

export default Header;
