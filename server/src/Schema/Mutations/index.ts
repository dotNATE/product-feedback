import createUser from "./User/createUser";
import deleteUser from "./User/deleteUser";
import updatePassword from "./User/updatePassword";
import loginWithEmail from "./User/loginWithEmail";

import createFeedback from "./Feedback/createFeedback";

const mutations = { createUser, deleteUser, updatePassword, loginWithEmail, createFeedback };

export default mutations;