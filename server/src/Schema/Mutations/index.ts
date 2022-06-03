import createUser from "./User/createUser";
import deleteUser from "./User/deleteUser";
import updatePassword from "./User/updatePassword";
import loginWithEmail from "./User/loginWithEmail";

const mutations = { createUser, deleteUser, updatePassword, loginWithEmail };

export default mutations;