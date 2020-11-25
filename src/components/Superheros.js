import React from "react";
import superheros from "../Superheros";

const Superheros = () => {
	const listStyles = {
		color: "green",
		fontSize: "16px",
		padding: "10px 2px",
	};
	return (
		<ol>
			{superheros.map((hero) => {
				return (
					<li style={listStyles}>
						{" "}
						{hero.name} - {hero.description}
					</li>
				);
			})}
		</ol>
	);
};

export default Superheros;
