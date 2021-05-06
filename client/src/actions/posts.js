import * as api from '../api'; // import all from api

// Action Creators (functions that return actions)
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // fetch data from api
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
