import '../styles/styles.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store/index';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

export const generateClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export const generateAuthenticatedClient = (token: string): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    headers: {
      authorization: token,
    }
  });
};

export const client = generateClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default MyApp;
