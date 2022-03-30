import React from 'react';
import "./Style.css";
import StaticPosts from './static/StaticPosts';
import axios from "axios";

class Posts extends React.Component
{
	constructor()
	{
		super();
		this.state={
			posts:null
		}
	}
	componentDidMount()
	{
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((response)=>{
			this.setState({posts:response.data},function()
				{
					console.log(this.state.posts);
				});
		})
		.catch((error)=>
		{
			console.log(error);
		})

	}

	render()
	{
		return(
		<>
			<div className="posts-container">
				<div className="posts-section">
					<StaticPosts title="title1" subtitle="subtitle1"/>
				</div>
				<div className="posts-section">
					<StaticPosts title="title1" subtitle="subtitle1"/>
				</div>
				<div className="posts-section">
					<StaticPosts title="title1" subtitle="subtitle1"/>
				</div>
				<div className="posts-section">
					<StaticPosts title="title1" subtitle="subtitle1"/>
				</div>
				<div className="posts-section">
					<StaticPosts title="title1" subtitle="subtitle1"/>
				</div>
			</div>
			<div className="pagination">
				<ul>
					<li>Prev</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>Next</li>
				</ul>
			</div>
		</>
		);
	}
}

export default Posts;