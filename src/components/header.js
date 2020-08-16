import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          fields{
            slug
          }
        }
      }
    }
  }
  `)

  return (
  <header className={headerStyles.header}>
    
      <h1>
        <Link
          className={headerStyles.title}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/page-2/">Page 2</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/page-3/">Page 3</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/page-4/">Page 4</Link>
          </li>
          {data.allMarkdownRemark.edges.map((edge) => {
            return(
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to= {`/teams/${edge.node.fields.slug}`}>{edge.node.fields.slug}</Link>

              </li>
            )
          })}

          
            
        </ul>
        
      </nav>
    
  </header>
  )
}




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
