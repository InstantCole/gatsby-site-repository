import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteAuthor }) => (
    <footer>
          © {new Date().getFullYear()}, {siteAuthor}
        </footer>
)
    



Footer.propTypes = {
    siteAuthor: PropTypes.string,
  }
  
  Footer.defaultProps = {
    siteAuthor: ``,
  }

  export default Footer