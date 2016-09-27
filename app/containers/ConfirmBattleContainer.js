import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import {getPlayersInfo} from '../utils/githubHelpers';

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },

  componentDidMount() {
    const {playerOne, playerTwo} = this.props.location.query;
    getPlayersInfo([playerOne, playerTwo])
      .then(function(players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        });
      }.bind(this));
  },

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    );
  }
});

export default ConfirmBattleContainer;
