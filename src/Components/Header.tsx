import React from 'react';

function Header() {
	return (
    <header className='flex justify-between items-center'>
      <div className='text-amber-500 font-semibold text-xl'>MathBrain</div>
      <nav>
        <ul className='flex flex-row gap-4'>
          <li><a className='ease-in-out duration-100 hover:text-amber-500' href='/'>Home</a></li>
          <li><a className='ease-in-out duration-100 hover:text-amber-500' href='/'>About</a></li>
          <li><a className='ease-in-out duration-100 hover:text-amber-500' href='/'>Settings</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
