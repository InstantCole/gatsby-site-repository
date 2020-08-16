/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    
    if(node.internal.type === 'MarkdownRemark')
    {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField ({
            node,
            name: 'slug',
            value: slug
        })
    }
    
}

exports.createPages = async ( { graphql, actions} ) => {
    const { createPage } = actions;
    const teamPageTemplate = path.resolve('./src/templates/team.js')
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges{
                    node{
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.allMarkdownRemark.edges.forEach(edge => {
        console.log("page created")
        createPage({
            path: `/teams/${edge.node.fields.slug}`,
            component: teamPageTemplate,
            context: {
                slug: edge.node.fields.slug
            }
        }

        )
    })

}