import React from 'react';

function Card(props) {
	return (
		<>
			<div className="cards">
				<div className="card">
					<img src={props.imgsrc} alt="poster" className="card__img" />
					<div className="card__info">
						<span className="imdb__rating">{props.rating}</span>
						<h3 className="card__title">{props.title}</h3>
						<a href={props.link} target="_blank">
							<button>Watch Trailer Now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card;