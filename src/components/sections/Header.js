import React from 'react'
import Logo from '../individuals/Logo'
import Menu from '../individuals/Menu'
import MenuLinksIcons from '../individuals/MenuLinksIcons'


const Header = () => {
  return (
    <section className='header container'>
        <Logo />
        <Menu />
        <MenuLinksIcons />
    </section>
  )
}

export default Header