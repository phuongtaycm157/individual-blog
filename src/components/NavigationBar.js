import React from 'react';
import './NavigationBar.css';

function ButtonEffect (props) {
  const { children, type } = props;
  if (type === 'button') {
    return (
      <div className='button-effect'>
        {children}
      </div>
    )
  } else {
    return (
      <div className='icon-effect'>
        {children}
      </div>
    )
  }
}

export default function NavigationBar (props) {
  return (
    <div className='NavigationBar'>
      <div className='container nav-bar'>
        <div className='group-nav'>
          <ButtonEffect type='button'>
            <a href='/' className='button-nav'>Home</a>
          </ButtonEffect>
          <ButtonEffect type='button'>
            <a href='/blog' className='button-nav'>Blog</a>
          </ButtonEffect>
          <ButtonEffect type='button'>
            <a href='/aboutme' className='button-nav'>About me</a>
          </ButtonEffect>
        </div>
        <div className='group-nav'>
          <ButtonEffect type='icon'>
            <i class="icon fab fa-facebook-f"></i>
          </ButtonEffect>
          <ButtonEffect type='icon'>
            <i class="icon fab fa-twitter"></i>
          </ButtonEffect>
          <ButtonEffect type='icon'>
            <i class="icon fab fa-instagram"></i>
          </ButtonEffect>
          <ButtonEffect type='icon'>
            <i class="icon fab fa-youtube"></i>
          </ButtonEffect>
        </div>
      </div>
    </div>
  )
}