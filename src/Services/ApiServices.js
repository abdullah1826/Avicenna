import axios from "axios";
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
    console.log(response.data);
    callback(response.data.data);
  } catch (error) {
    console.error(error.message);
  }
};
export const FetchCreators = async (callback) => {
  try {
    const response = await axios.get(`${apiBaseUrl}website-creators`);
    console.log(response.data);
    callback(response.data.data);
  } catch (error) {
    console.error(error.message);
  }
};

export const FetchCareer = async (callback) => {
  try {
    const response = await axios.get(`${apiBaseUrl}website-careers`);
    console.log(response.data);
    callback(response.data.data);
  } catch (error) {
    console.error(error.message);
  }
};

export const handleSubmit = async (contactData, callback) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}website-contact-us`,
      contactData
    );
    console.log("Response from server:", response.data);
    // Clear the form after submission
    callback(true);
  } catch (err) {
    console.error("Error posting data:", err.message);

    callback(false);
  }
};
