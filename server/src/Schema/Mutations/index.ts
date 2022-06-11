import createUser from "./User/createUser";
import deleteUser from "./User/deleteUser";
import updatePassword from "./User/updatePassword";
import loginWithEmail from "./User/loginWithEmail";

import createSuggestion from "./Suggestion/createSuggestion";

import addUpvote from "./Upvotes/addUpvote";

const mutations = { 
    createUser,
    deleteUser,
    updatePassword,
    loginWithEmail,
    createSuggestion,
    addUpvote,
};

export default mutations;