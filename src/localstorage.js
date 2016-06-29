export default (localStorage, key) => {
  const setData = (data) => localStorage.setItem(key, JSON.stringify(data));

  return {
    getData: () => localStorage.getItem(key),
    connect: ({ subscribe, getState }) => subscribe(() => setData(getState()))
  };
};
