import React, { useContext } from 'react'

const Logo = (props) => {
  return (
    <>
      <div>
        <img
          className="mobileShow"
          src="/images/newLogo.png"
          alt="Logo"
          {...props}
          style={{ width: '70px', marginTop: '-5px' }}
        />
      </div>
      <div>
        <img
          className="mobileHide"
          src="/images/newLogo.png"
          alt="Logo"
          {...props}
          style={{ width: '100px' }}
        />
      </div>
    </>
  )
}

export default Logo
