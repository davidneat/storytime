export default (localStorage, key) => {
  const setData = (value) => localStorage.setItem(key, value);

  return {
    getData: () => localStorage.getItem(key),
    connect: ({ subscribe, getState }) => subscribe(() => {
      const jsonString = JSON.stringify(getState());
      setData(jsonString);
    })
  };
};
