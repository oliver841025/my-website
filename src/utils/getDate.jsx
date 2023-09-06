export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate() + 20;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${(month < 10 ? '0' : '') + month}-${(day < 10 ? '0' : '') + day}`;
};
