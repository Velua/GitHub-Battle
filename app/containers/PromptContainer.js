var React = require('react');
var Prompt = require('../components/Prompt');


var PromptContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		return {
			username: ''
		}
	},

	handleUpdateUser: function(e){
		this.setState({
			username: e.target.value
		})
	},

	handleSubmitUser: function(e){
		console.log('button pressed')
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		})

		if (this.props.routeParams.playerOne){ 
			console.log("we're going to battle")
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {
			console.log('we are going to player 2')
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	},

	render: function(){
		return <Prompt onSubmitUser={this.handleSubmitUser} onUpdateUser={this.handleUpdateUser} header={this.props.route.header} username={this.state.username} />
			
	}

});

module.exports = PromptContainer;