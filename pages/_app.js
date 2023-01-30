import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import client from '../graphql/client';
import Layout from '../components/Shared/Layout';
import { wrapper } from '../redux/store';
import { CssBaseline } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
