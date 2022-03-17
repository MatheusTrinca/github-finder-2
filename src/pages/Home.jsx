import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

const Home = () => {
  return (
    <>
      <h1 className="text-6xl">
        <UserSearch />
        <UserResults />
      </h1>
    </>
  );
};

export default Home;
