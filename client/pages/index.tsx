import type { NextPage } from 'next';
import { selectAuthenticated } from '../store/auth';
import { useAppSelector } from '../store/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Home from '../views/Home';

const HomePage: NextPage = () => {
  const router = useRouter();
  const authenticated = useAppSelector(selectAuthenticated);

  useEffect(() => {
    if (!authenticated) router.push('/login');
  }, [authenticated, router]);

  return authenticated ? (
    <Home></Home>
  ) : null;
};

export default HomePage;
