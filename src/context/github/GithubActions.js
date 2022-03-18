import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Search users
export const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text,
  });

  const results = await github.get(`${GITHUB_URL}/search/users?${params}`);
  return results.data;
};

export const getUserAndRepos = async login => {
  const [user, repos] = await Promise.all([
    github.get(`${GITHUB_URL}/users/${login}`),
    github.get(`${GITHUB_URL}/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
