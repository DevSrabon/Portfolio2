import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

const Details = () => {
	const params = useParams()
	const {id}=params;
	
	const id2= parseInt(id)
	const [data, setData] = useState([]);
	console.log("🚀 ~ file: Details.jsx:8 ~ Details ~ data:", data)
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);
	
	const result = data.filter((see) => see.id === id2);
	console.log("🚀 ~ file: Details.jsx:18 ~ Details ~ result:", result)

	return (
		<div>
			{result.map((detail) => (
				<Detail key={detail.id} detail={detail} />
			))}
		</div>
	);
};

export default Details;
