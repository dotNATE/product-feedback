import createUser from "./user/createUser";
import loginWithEmail from "./user/loginWithEmail";
import createSuggestions from "./suggestions/createSuggestion";
import addUpvote from "./upvotes/addUpvote";
import removeUpvote from "./upvotes/removeUpvote";

export { createUser as createUserMutation };
export { loginWithEmail as loginWithEmailMutation };
export { createSuggestions as createSuggestionsMutation };
export { addUpvote as addUpvoteMutation };
export { removeUpvote as removeUpvoteMutation };