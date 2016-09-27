import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {space} from '../styles';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';
import Loading from './Loading';

function StartOver() {
  return <div className='col-sm-12' style={space}>
    <Link to='/playerOne'>
      <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
    </Link>
  </div>;
}

function Results({isLoading, playersInfo, scores}) {
  if (isLoading === true) {
    return <Loading text='One Moment' speed={100} />;
  }

  if (scores[0] === scores[1]) {
    return <MainContainer>
      <h1> It's a tie!</h1>
      <StartOver />
    </MainContainer>;
  }

  const winningIndex = scores[0] > scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return <MainContainer>
    <h1>Results</h1>
    <div className='col-sm-8 col-sm-offset-2'>
      <UserDetailsWrapper header='Winner'>
        <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]}/>
      </UserDetailsWrapper>

      <UserDetailsWrapper header='Loser'>
        <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]}/>
      </UserDetailsWrapper>
    </div>
    <StartOver />
  </MainContainer>;
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

export default Results;
