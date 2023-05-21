import React, { useContext } from 'react'

const Logo = (props) => {
  return (
    <>
      <div>
        <img
          className="mobileHide"
          src="/images/newLogo.png"
          alt="Logo"
          style={{ width: '165px', marginTop: '-9px' }}
          {...props}
        />
      </div>
    </>
  )
}

export default Logo
