var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var PropTypes = React.PropTypes;

function Results(props) {
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  return <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
    <h1>Results</h1>
    <div className='col-sm-8 col-sm-offset-2'>
      <UserDetailsWrapper header='Winner'>
        <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
      </UserDetailsWrapper>

      <UserDetailsWrapper header='Loser'>
        <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
      </UserDetailsWrapper>
    </div>
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
      </div>
  </div>;
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;