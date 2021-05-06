export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload; // payload data from getPosts
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
};
