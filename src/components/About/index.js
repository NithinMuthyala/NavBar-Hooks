import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {values => {
      const {isDarkTheme} = values

      const aboutImages = [
        'https://assets.ccbp.in/frontend/react-js/about-dark-img.png',
        'https://assets.ccbp.in/frontend/react-js/about-light-img.png',
      ]

      const image = isDarkTheme ? aboutImages[0] : aboutImages[1]
      const bgColor = isDarkTheme ? 'home-cont' : 'home-contwh'

      return (
        <div>
          <Navbar />
          <div className={bgColor}>
            <img src={image} alt="about" className="about-image" />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
