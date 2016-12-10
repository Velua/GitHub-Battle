var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		console.log("get initial state")
		return {
			isLoading: true,
			playerInfo: []
		}
	},

	componentDidMount: function() {
		var query = this.props.location.query
		// fetch github info then update the state bitch.
		console.log(query.playerOne, query.playerTwo)
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players){
				console.log(players)
				this.setState({
					isLoading: false,
					playerInfo: [players[0], players[1]]
				})
			}.bind(this))
	},

	componentWillMount: function(){
		console.log("it will mount bruh")
	},

	componentWillReceiveProps: function(nextProps) {
		console.log("we received props")
	},

	handleIntitiateBattle: function(){
		this.context.router.push({
			pathname: '/results',
			state: {
				playerInfo: this.state.playersInfo
			}
		})
	},

	render: function() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading} 
				onInitiateBattle={this.handleIntitiateBattle}
				playersInfo={this.state.playerInfo} />
		);
	}

});

module.exports = ConfirmBattleContainer;