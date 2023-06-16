/**
 *
 * @param {object}[option] param0
 * @returns
 */
import queryString from "query-string";
export const getUsers = (option = {}) => {
  const drfaultOption = {
    page: 1,
    results: 1,
    seed: "test",
  };
  const trueOptions = {
    ...drfaultOption,
    ...option
  }
  const stringOptions = queryString.stringify(trueOptions)
  const response = fetch(
    `https://randomuser.me/api/?${stringOptions}`
  ).then((response) => response.json());
  return response;
};
export const getPosts = (options) => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  );
};