import SearchBar from '../SearchBar/SearchBar'
import './Header.css'
import React from 'react'
import CartButton from '../CartButton/CartButton'

const Header = () => {
  return (
    <header className='header'>
        <div className="container" >
            <SearchBar />
            <CartButton />
        </div>
    </header>
  )
}

export default Header