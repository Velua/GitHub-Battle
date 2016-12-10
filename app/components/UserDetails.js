var React = require('react');

function UserDetails(props){
	return <div>
		<h1>{props.user.name}</h1>
		<a href={props.user.html_url}><h3>{props.user.login}</h3></a>
		<img src={props.user.avatar_url} /><br />
		Followers: {props.user.followers}<br />
		{props.user.location && <span> Location: {props.user.location}<br /></span>}
		{props.user.public_repos && <span> Repos: {props.user.public_repos}<br /></span>}
		{props.user.company && <span> Company: {props.user.company} <br /></span>}
		{props.user.following ? <span> Following: {props.user.following}<br /></span> : <b>Not following anyone</b>}

	</div>
}



module.exports = UserDetails;