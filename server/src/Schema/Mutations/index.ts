import createUser from './User/createUser';
import deleteUser from './User/deleteUser';
import updatePassword from './User/updatePassword';
import loginWithEmail from './User/loginWithEmail';

import createSuggestion from './Suggestion/createSuggestion';

import addUpvote from './Upvotes/addUpvote';
import removeUpvote from './Upvotes/removeUpvote';

const mutations = {
  createUser,
  deleteUser,
  updatePassword,
  loginWithEmail,
  createSuggestion,
  addUpvote,
  removeUpvote,
};

export default mutations;
