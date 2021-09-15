import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Juan</span>
      <button className='btn btn-outline-danger'>
          <span>
              <i className='fas fa-sign-out-alt'></i>
              Salir
              </span>
      </button>
    </div>
  );
};
