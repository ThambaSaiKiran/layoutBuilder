// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Producer>
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div>
            {showContent && (
              <div className="bdCont">
                <p>Left Navbar Menu</p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            )}
            {showLeftNavbar && (
              <div className="bdCont">
                <p>Content</p>
                <p>
                  Lorem ipsum dolor sit eiusmod tempor amet, consectetur
                  adipiscing elit, sed do Incididunt ut labore et Ut enim ad
                  minim veniam. dolore magna aliqua.
                </p>
              </div>
            )}
            {showRightNavbar && (
              <div className="bdCont">
                <p>Right Navbar</p>
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            )}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  </ConfigurationContext.Producer>
)

export default Body
