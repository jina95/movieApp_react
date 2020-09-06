import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(){
    return (
      <div>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>

        {/*  to 에는 string 을 넣을 수 있고, object를 사용할 수도 있다. */}
      </div>
    );
}

export default Navigation;