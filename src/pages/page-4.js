import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tab from "../components/tab"

const Page4 = () => {
  const [scale, setScale ] = useState(0);
  const [startingFret, setFret ] = useState(0);
  //const [scale2, setScale2 ] = useState(1);

  const data = useStaticQuery(graphql`
  query {
    allImageSharp{
      edges{
        node{
          fluid(maxWidth: 200){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            team
          }
          fields{
            slug
          }
        }
      }
    }
    
  }
`)









return (
  <Layout>
    <SEO title="Rocket League Teams Page" />
    <h1>Tabs</h1>
    
    <Tab scale= {scale} setScale= {setScale} startingFret={startingFret} setFret= {setFret}/>
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>

)
  

  
}

export default Page4
