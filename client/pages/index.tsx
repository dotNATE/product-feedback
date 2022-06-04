import type { NextPage } from 'next';
import { selectAuthenticated } from '../store/auth';
import { useAppSelector } from '../store/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const authenticated = useAppSelector(selectAuthenticated);

  useEffect(() => {
    if (!authenticated) router.push('/login');
  }, [authenticated]);

  return (
    <div></div>
  );
};

export default Home;
