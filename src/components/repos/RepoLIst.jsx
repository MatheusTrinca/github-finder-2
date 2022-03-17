import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ repos }) {
  return (
    <div className="bg-grey-700 rounded-lg shadow-lg card">
      <div className="card-body">
        <h2 className="text-white text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
