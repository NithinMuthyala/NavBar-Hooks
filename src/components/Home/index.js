import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {values => {
      const {isDarkTheme} = values
      const image = [
        'https://assets.ccbp.in/frontend/react-js/home-light-img.png',
        'https://assets.ccbp.in/frontend/react-js/home-dark-img.png',
      ]

      const reqimage = isDarkTheme ? image[1] : image[0]

      const bgColor = isDarkTheme ? 'home-cont' : 'home-contwh'
      return (
        <div>
          <Navbar />
          <div className={bgColor}>
            <img src={reqimage} alt="home" className="home-image" />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
