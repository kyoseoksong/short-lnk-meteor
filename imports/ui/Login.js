import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor'; // Login을 위해서 추가

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      // console.log('Login callback', err); // 삭제
      if (err) {
        this.setState({error: "이메일과 패스워드를 다시 한번 확인해 주세요."});
      } else {
        this.setState({error: ''});
      }
    })
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>단축 URL</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="이메일"/>
            <input type="password" ref="password" name="password" placeholder="패스워드"/>
            <button className="button">Login</button>
          </form>
          <Link to="/signup"> 계정이 필요하세요? </Link>
        </div>
      </div>
    )
  }
}
