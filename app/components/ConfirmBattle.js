var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');

function puke(object){
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props){
	return props.isLoading === true
	? <p> Loading! </p>
	: <div>


	<h1> Show down </h1>

	<br /> <br />
	<h2> Player One </h2><br />
		<UserDetails user={props.playersInfo[0]} />
	<h2> Player Two </h2>
		<UserDetails user={props.playersInfo[1]} />
	</div>

}


ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;