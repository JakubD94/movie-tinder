import React from "react";

const MovieItem = (props) => {
	return (
		<div className="movie">
			<div className="movie__content">
				<h2 className="movie__content--title">{props.title}</h2>
				<p className="movie__content--rate">({props.rate}/10)</p>
			</div>
			<div className="movie__img--container">
				<img
					className="movie__img"
					src={props.src}
					alt={`${props.title} movie poster`}
				/>
			</div>
			<p className="movie__summary">{props.summary}</p>
		</div>
	);
};

export default MovieItem;
