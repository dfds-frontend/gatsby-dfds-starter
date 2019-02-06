import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'

// const clientSideQuery = gql`
//   {
//     urlSlugCollection(locale: "it-IT", where: { slug_exists: true }) {
//       items {
//         sys {
//           id
//         }
//       }
//     }
//   }
// `

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <br />
    {/* <Query query={clientSideQuery}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading pupper...</p>
        if (error) return <p>Error: ${error.message}</p>
        const { items } = data.urlSlugCollection
        return (
          <ul>
            {items.map(item => (
              <li key={item.sys.id}>{item.sys.id}</li>
            ))}
          </ul>
        )
      }}
    </Query> */}
  </Layout>
)

export default SecondPage
