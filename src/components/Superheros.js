import React, { useEffect, useState } from "react";

const listStyles = {
	color: "green",
	fontSize: "16px",
	padding: "10px 2px",
};

const Superheros = () => {
	const [superheros, setSuperheros] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/api/v1/superheros")
			.then((response) => response.json())
			.then((data) => {
				setSuperheros(data);
			});
	});

	return (
		<ol>
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
