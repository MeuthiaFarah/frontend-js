// import data
import users from "./data.mjs";

const index = () => {
  console.log(users);
};

const store = (user) => {
  users.push(user);
};

/**
 * export beberapa data
 * data diexport dalam object
 */
export { index, store };