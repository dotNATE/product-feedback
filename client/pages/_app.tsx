import '../styles/styles.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store/index';

function MyApp({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
    headers: {
      authorization: token,
    },
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default MyApp;
