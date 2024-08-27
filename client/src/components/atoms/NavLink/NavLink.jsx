import React from 'react'

function NavLink({href,children}) {
  return (
    <a href={href} className='nav-link'>
        {children}
    </a>
  )
}

export default NavLink