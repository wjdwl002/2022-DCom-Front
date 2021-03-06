import { useHistory, Link } from 'react-router-dom'
import React, { useRef, useEffect, useState } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

const TopMenu = ({ isLoggedIn, setIsLoggedIn }) => {
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [])

  const [isMenuOn, setIsMenuOn] = useState(false)
  const mobileMenuRef = useRef()

  const onLogOut = () => {
    signOut(getAuth())
  }

  const menuOnToggle = () => {
    if (isMenuOn) {
      mobileMenuRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
    }
    setIsMenuOn((isMenuOn) => !isMenuOn)
  }

  const history = useHistory()
  const onClickBoard = (ref) => {
    setIsMenuOn(false)
    history.replace(`/${ref}`)
  }

  const menuList = [
    {
      ref: '',
      label: '๐ ใํ'
    },
    {
      ref: 'search',
      label: '๐ใ๊ฒ์ํ๊ธฐ'
    }
  ]

  return (
    <div className="TopMenu">
      <div className="NavBar">
        <Link to="/">
          <div className="logo" style={{ color: '#ffc83d' }}>
            FOCUZ
          </div>
        </Link>
        {!isLoggedIn
          ? (
          <Link to="login">
            <button className="loginBtn">๋ก๊ทธ์ธ</button>
          </Link>
            )
          : (
          <div className="loginBtn" onClick={onLogOut}>
            {getAuth().currentUser.email}
          </div>
            )}
        <button className="hamburgerBtn" onClick={menuOnToggle}>
          โก
        </button>
      </div>

      <div className={isMenuOn ? 'isMenuOn' : 'isMenuOff'} ref={mobileMenuRef}>
        {/* ๋ชจ๋ฐ์ผ ๋ฉ๋ด ๋ฆฌ์คํธ */}
        {menuList.map(({ ref, label }) => (
            <button
                key={ref}
                onClick={() => {
                  onClickBoard(ref)
                }}
            >
              {label}
            </button>
        ))}

        <div className="mobileCopyright"></div>
      </div>
    </div>
  )
}

export default TopMenu
