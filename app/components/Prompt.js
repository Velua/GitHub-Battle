var React = require('react');
var PropTypes = React.PropTypes;



function Prompt(props){
	return (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
			<h1>{props.header}</h1>

			<form onSubmit={props.onSubmitUser}>
				<input
					className="form-control"
					placeholder="GitHub Username"
					type="text"
					onChange={props.onUpdateUser} 
					value={props.username} />


					<button
						className="btn btn-block btn-success"
						type="submit">
						Continue 
					</button>

			</form>
		</div>
				)
}

Prompt.propTypes = {
		header: PropTypes.string.isRequired,
		onUpdateUser: PropTypes.func.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		username: PropTypes.string.isRequired
	}

module.exports = Prompt;