import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Carrusel } from "../component/carrusel";
import { Cards } from "../component/cards";
import { ArchivosPDF } from "../component/archivospdf";

export const Home = () => (
	<div className="text-center mt-5">
		<Carrusel/>
		<br/>
		<Cards/>
		<br/>
		<ArchivosPDF/>
	</div>
);
