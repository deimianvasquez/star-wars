import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store } = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorites.length}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {
                store.favorites.map((item) => {
                  return (
                    <li key={item._id}>
                      <a className="dropdown-item" href="#">
                        {item.properties.name}
                      </a>
                    </li>
                  )
                })
              }
              {/* <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
