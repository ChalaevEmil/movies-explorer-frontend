const decode = (data) => JSON.stringify(data);
const encode = (data) => JSON.parse(data);

function getLocalData(key) {
  return  encode(localStorage.getItem(key));
}

function setLocalData(key, data) {
  localStorage.setItem(key, decode(data));
}
  
export { setLocalData, getLocalData };