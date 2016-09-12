var React = require('react');

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> CONFIRM BATTLE: {puke(props)} </p>;
}

module.exports = ConfirmBattle;
