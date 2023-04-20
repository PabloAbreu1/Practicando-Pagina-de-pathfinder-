import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Clases } from "../component/clases";
import "../../styles/clasesvista.css"

export const ClasesVista = () => (
	<div className="text-center mt-5" id="clasesvista">
		<Clases/>
		<br/>
	</div>
);
