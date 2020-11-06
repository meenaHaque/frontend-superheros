import React from "react";
import superheros from "../superheros";

const Superheros = () => {
	const listStyles = {
		color: "green",
		fontSize: "16px",
		padding: "10px 2px",
  },
  
	return (
		<ol>
			<h1>Awesome Superheros</h1>
			{superheros.map((hero) => {
				return (
					<li key={hero.id} style={listStyles}>
						{hero.name} - {hero.description}
					</li>
				);
			})}
		</ol>
	);
};

export default Superheros;
