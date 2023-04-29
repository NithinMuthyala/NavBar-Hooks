import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {values => {
      const {isDarkTheme} = values
      const bgColor = isDarkTheme ? 'bgblack' : 'bgno'

      return (
        <>
          <Navbar />
          <div className={bgColor}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-image"
            />
            <h1>Lost Your Way</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
