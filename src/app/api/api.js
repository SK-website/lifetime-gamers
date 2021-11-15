const URL = './gamesList.json';

const getData = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};
export default getData;
