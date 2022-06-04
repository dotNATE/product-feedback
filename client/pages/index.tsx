import type { NextPage } from 'next';
import { selectAuthenticated } from '../store/auth';
import { useAppSelector } from '../store/hooks';

const Home: NextPage = () => {
  const authenticated = useAppSelector(selectAuthenticated);

  return (
    <div>
      { authenticated }
    </div>
  );
};

export default Home;
