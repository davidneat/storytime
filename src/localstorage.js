export default (localStorage, key) => {
  const setData = (value) => localStorage.setItem(key, value);

  return {
    getData: () => localStorage.getItem(key),
    connect: ({ subscribe, getState }) => subscribe(() => setData(getState()))
  };
};
