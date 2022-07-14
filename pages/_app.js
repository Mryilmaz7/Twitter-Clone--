import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useLayoutEffect, useState} from 'react'
import StoreContext from "../store/store";

function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null)

  useLayoutEffect(() => {
    const theme = localStorage.getItem('Theme') || 'light'
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('Theme', theme)
  }
  useEffect(() => {
    const $html = document.querySelector('html')
    $html.classList.remove('light')
    $html.classList.remove('dark')
    $html.classList.remove('dim')

    $html.classList.add(theme)
  }, [theme])

  return (
      <StoreContext.Provider value={{ theme, changeTheme }}>
        <Component {...pageProps} />
      </StoreContext.Provider>
  )



}

export default MyApp
