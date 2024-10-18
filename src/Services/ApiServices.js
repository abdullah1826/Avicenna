import axios from 'axios';
const apiBaseUrl = "https://apis.avicennaenterprise.com/api/";

export const fetchData = async (callback) => {
  try {
    const response = await axios.get(`${apiBaseUrl}website-home`);
    callback(response.data.data);
  } catch (error) {
    console.error(error.message);
  }
};
export const FetchBlogs = async (callback) => {
  try {
    const response = await axios.get(`${apiBaseUrl}website-blogs`);
    callback(response.data.data);
  } catch (error) {
    console.error(error.message);
  }
};
export const FetchServices = async (callback) => {
  try {
    const response = await axios.get(`${apiBaseUrl}website-services`);
    console.log(response.data)
    callback(response.data.services);
  } catch (error) {
    console.error(error.message);
  }
};

