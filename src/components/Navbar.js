import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
    return (
        <div className="container">
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
                    >
                        <input
                            onClick={props.toggleMode}
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="switchCheckDefault"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="switchCheckDefault"
                        >
                            Enable Dark Mode
                        </label>
                    </div>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
};

Navbar.defaultProps = {
    title: "harumi",
    about: "anime watch",
};
