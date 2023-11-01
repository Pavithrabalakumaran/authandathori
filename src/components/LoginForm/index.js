// Write your JS code here
// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitLoginButton = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassWord = event => {
    this.setState({password: event.target.value})
  }

  renderUserNameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor={username}>
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          className="user-input-field"
          onChange={this.onChangeUserName}
          placeholder="Username"
        />
      </>
    )
  }

  renderPassWordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor={password}>
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className="user-input-field"
          onChange={this.onChangePassWord}
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-mobile-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />

        <form className="form-container" onSubmit={this.onSubmitLoginButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop-image"
          />
          <div className="input-container">{this.renderUserNameField()}</div>
          <div className="input-container">{this.renderPassWordField()}</div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
