import { GraphQLClient, gql } from 'graphql-request'
// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHICS_ENDPOINT



export const getPosts = async () => {
    const graphQLClient = new GraphQLClient(
       "https://api-ap-south-1.hygraph.com/v2/cl628d7bn5skl01t3dpko87e7/master"
    );
    const query = gql`
    query MyQuery {
       postsConnection {
              edges {
                node {
                  author {
                    bio
                    name
                    id
                    photo {
                      url
                    }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
            
          }
          
    }
    `
    const result = await graphQLClient.request(query)
    return result.postConnection.edges && result.postConnection.edges
}