import React from 'react';
import { Link } from 'react-router';

import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '' 
    }
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim(); // 아래에서 ref="email" 했기 때문에 접근 가능해 진 것임
    let password = this.refs.password.value.trim(); // 아래에서 ref="password" 했기 때문에 접근 가능해 진 것임

    if (password.length < 9) {
      return this.setState({error: '패스워드는 8자 이상이여야 합니다.'});
    }

    Accounts.createUser({email, password}, (err) => { // ES6 방식
      // console.log('Singup callback', err); // 삭제
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });

    // 이제 아래 내용 삭제할 수 있다.
    // this.setState({
    //   error: 'Something went wrong.'
    // });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>단축 URL 앱에 가입하세요</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}   {/* 여기에 에러 메시지가 표시된다!!! */}
          <form onSubmit={this.onSubmit.bind(this)} noValidate className="box-view-form">
            <input type="email" ref="email" name="email" placeholder="이메일"/> {/* ref="email" 추가! */}
            <input type="password" ref="password" name="password" placeholder="패스워드"/>  {/* ref="password" 추가! */}
            <button className="button">계정을 만드세요</button>
          </form>
          <Link to="/">이미 계정이 있으세요?</Link>
        </div>
      </div>
    )
  }
}
