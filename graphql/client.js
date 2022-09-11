import Cookies from 'js-cookie';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';

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

const httpLink = new HttpLink({ uri });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
