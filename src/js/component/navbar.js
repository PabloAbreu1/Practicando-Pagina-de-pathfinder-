import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
		<div class="col-12">
        <nav class="navbar navbar-expand-lg bg-danger col-12">
            <div class="container-fluid col-8">
            <img class="d-inline-block" src="https://th.bing.com/th/id/R.ce892f427738e7c0eac5e5bf266978cc?rik=n3JMVeC4OYy2TA&pid=ImgRaw&r=0" alt="" width="200"
            height="50"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="col-2">
            <form class="d-flex justify-content-around" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success d-flex justify-content-around" type="submit">Buscar</button>
            </form>
            </div>
            <div class="col-1"><p></p></div>
        </nav>
    </div>
	</>
	);
};
