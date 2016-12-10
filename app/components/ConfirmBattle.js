var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');

function puke(object){
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props){
	return props.isLoading === true
	? <center> <br /><br /><br /><br /><br /><h1>Loading! </h1></center>
	: <div>


	<center><h1> Show down! </h1>

	<br /> <br />
	<div className="row">
	<div className="col-md-6">
		<UserDetails user={props.playersInfo[0]} header="Player 1" />
		</div>
		<div className="col-md-6">
		<UserDetails user={props.playersInfo[1]} header="Player 2" />
		</div>
		</div>
		<div className="row">
</div>
</center>
{puke(props.playersInfo[0])}
	</div>

}


ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;