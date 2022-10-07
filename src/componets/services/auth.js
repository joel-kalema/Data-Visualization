import axios from "axios";

const basedURL = 'http://localhost:3000/'
const authenticateUser = async (body) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const result = basedURL
    .post('api/sessions', body, config)
    .then((response) => response.data);
  return result;
};

const registerUser = async (body) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

 const result = await axios.post(`${basedURL}/api/users`, body)
 const {data} = await result

  return data;
};

export default { authenticateUser, registerUser };