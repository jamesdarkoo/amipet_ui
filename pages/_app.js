import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import client from '../graphql/client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
