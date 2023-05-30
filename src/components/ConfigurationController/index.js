// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Producer>
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value
        const onShowContent = () => {
          onToggleShowContent()
        }
        const onShowLeftNavbar = () => {
          onToggleShowLeftNavbar()
        }
        const onShowRightNavbar = () => {
          onToggleShowRightNavbar()
        }
        return (
          <div>
            <p>Layout</p>
            <div className="checkBox">
              <input type="checkbox" onChange={onShowContent} id="content" />
              <label htmlFor="content">Content</label>
            </div>
            <div className="checkBox">
              <input type="checkbox" onChange={onShowLeftNavbar} id="left" />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div className="checkBox">
              <input type="checkbox" onChange={onShowRightNavbar} id="right" />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  </ConfigurationContext.Producer>
)

export default ConfigurationController
