import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1> Page Not Found </h1>
        <p> 요청하신 페이지를 찾을 수 없습니다. </p>
        <Link to="/" className="button button--link"> HOME으로 돌아가기 </Link>
      </div>
    </div>
  )
}
