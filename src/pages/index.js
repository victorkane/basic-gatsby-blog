import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Body = (props) => {
  return (
  <div>
    <p>{props.body}</p>
    {props.posts.map(({ node }) => (
      <div key={node.id}>
{/*        <p><em>{node.date}</em></p> */}
        <h3>{node.title}</h3>
        <p>{node.body}</p>
        {node.fields && <div>
          <Link 
            to={node.fields.slug}
					>
					  Read more...
          </Link>
        </div>}
        <hr/>
      </div>
    ))}
  </div>
  )
}

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            body
						description
						author
          }
        }
        allJsonplaceholderapiPosts (limit: 8) {
          edges {
            node {
              id
              title
              body
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  // console.log('data', data)
  return (
    <Layout>
		  <SEO title="Home" />
      <Body body={data.site.siteMetadata.body} 
            posts={data.allJsonplaceholderapiPosts.edges}
      />
    </Layout>
  )
}
