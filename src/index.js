import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import Mdata from './Mdata'
import './index.css'

ReactDOM.render(
	<>
		<h1 className="headingStyle">TOP RATED IMDB MOVIES OF ALL TIME</h1>
		{Mdata.map((val) => {
			return (
				<Card
					key={val.id}
					imgsrc={val.imgsrc}
					rating={val.rating}
					title={val.title}
					link={val.link}
				/>
			);
		})}
	</>
	, document.getElementById("root")
);
