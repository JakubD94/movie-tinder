import React, { useState, useEffect } from "react";

import MovieItem from "../MovieItem/MovieItem.js";
import Button from "../UI/Button";

const Movies = (props) => {
	const [movies, setMovies] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		try {
			// fetch("/recommendations")
			// 	.then((res) => res.json())
			// 	.then((data) => {
			// 		setMovies(data);
			// 	});
			// I would not comment it out, but this is for the reqruitment process to show how would I fetch the data from the backend/database
			const movies = [
				{
					id: "1and3011",
					imageURL:
						"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
					title: "Inferno",
					summary:
						"Inferno is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					rating: 5.3,
				},
				{
					id: "2301abc",
					imageURL:
						"https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
					title: "Star Wars: Episode VII - The Force Awakens",
					summary:
						"Star Wars: Episode VII is aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					rating: 8.2,
				},
				{
					id: "1asdad11",
					imageURL:
						"https://cdn.chili.com/images/public/cms/1f/c8/d3/cb/1fc8d3cb-c5dc-4b61-9d3a-11957a623ae5.jpg?width=800",
					title: "Rocky II",
					summary:
						"Rocky II is aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					rating: 9.0,
				},
				{
					id: "230dsdwqc",
					imageURL:
						"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/597f420d9e23a988ae10bd5c9360858d61a932545c409cd4f3e7a553a06248ef._RI_V_TTW_.jpg",
					title: "Star Wars: Episode VIII",
					summary:
						"Star Wars: Episode VIII is aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					rating: 8.0,
				},
				{
					id: "1adwq2321",
					imageURL:
						"https://i.pinimg.com/originals/0f/a2/85/0fa28529e8d5819e3db7a806c6e02aaa.jpg",
					title: "Joker",
					summary:
						"Joker is aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					rating: 8.7,
				},
			];
			console.log("Your movies have been fetched!");
			setMovies(movies);
		} catch (err) {
			console.err(err);
		}
	}, []);

	const movie = {
		...movies[currentIndex],
	};

	const handleClickAccept = (e) => {
		setCurrentIndex(() => currentIndex + 1);
		console.log(`Movie posted to /recommendations/${movie.id}/accept`);
	};

	const handleClickReject = () => {
		setCurrentIndex(currentIndex + 1);
		console.log(`Movie posted to /recommendations/${movie.id}/reject`);
	};

	return (
		<div className="movies__wrapper">
			{currentIndex === movies.length ? (
				<h2 className="movies__message">
					There are no more movies! Please refresh the website.
				</h2>
			) : (
				<MovieItem
					title={movie.title}
					src={movie.imageURL}
					rate={movie.rating}
					summary={movie.summary}
				/>
			)}

			{currentIndex === movies.length || (
				<div className="btn__container">
					<Button className="btn--accept" onClick={handleClickAccept}>
						Accept
					</Button>
					<Button className="btn--reject" onClick={handleClickReject}>
						Reject
					</Button>
				</div>
			)}
		</div>
	);
};

export default Movies;
