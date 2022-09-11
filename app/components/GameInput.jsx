import * as React from "react";
import PropTypes from "prop-types";

export default class GameInput extends React.Component {
  state = {
    gamename: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      gamename: event.target.value,
    })
  }

  render() {
    return (
      <form className='card bg-light' onSubmit={this.handleSubmit}>
        <label htmlFor='gamename' className='player-label'>
          {this.props.label}
        </label>
        <div className='input-row'>
          <input
            type="text"
            id="gamename"
            className="input-light"
            placeholder="game name"
            autocomplete="off"
            value={this.state.gamename}
            onChange={this.handleChange}
          />
          <button
            className='btn link btn-dark'
            type='submit'
            disabled={!this.state.gamename}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

GameInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}