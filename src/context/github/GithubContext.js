import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search userts
  const searchUsers = async text => {
    const params = new URLSearchParams({
      q: text,
    });

    setLoading();
    const results = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await results.json();
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });

  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        setLoading,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
