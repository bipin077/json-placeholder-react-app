import React from "react";

const StaticPosts=(props)=>{
	return (
		<>
			<div className="items">
				<span className="data-userid">1</span>
				<h2>{ props.title }</h2>
				<p>{ props.subtitle }</p>
			</div>
		</>);
}

export default StaticPosts;