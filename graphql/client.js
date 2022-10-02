import Cookies from 'js-cookie';
import { ApolloClient, InMemoryCache, ApolloLink, concat } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uri = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const accessToken = Cookies.get('accessToken');

    if (!accessToken) {
      return { headers };
    }

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${accessToken}`,
      },
    };
  });

  return forward(operation);
});

export const cache = new InMemoryCache();
const uploadLink = createUploadLink({ uri });

const client = new ApolloClient({
  cache,
  link: concat(authMiddleware, uploadLink),
});

export default client;
