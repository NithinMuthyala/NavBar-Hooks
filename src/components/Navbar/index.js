import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {values => {
      const {isDarkTheme, toggleTheme} = values
      const logoImages = [
        'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
        'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
      ]

      const buttonImages = [
        'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
        'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
      ]

      const cssClass = isDarkTheme ? 'dark-bg' : 'light-bg'
      const logo = isDarkTheme ? logoImages[1] : logoImages[0]

      const theme = isDarkTheme ? buttonImages[0] : buttonImages[1]

      const themeClicked = () => {
        toggleTheme()
      }

      return (
        <nav className={`nav-cont ${cssClass}`}>
          <img src={logo} className="logo" alt="website logo" />
          <ul className="links-container">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button
            type="button"
            className="them-btn"
            onClick={themeClicked}
            data-testid="theme"
          >
            <img src={theme} className="theme" alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
