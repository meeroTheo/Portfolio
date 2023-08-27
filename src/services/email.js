//Services the API Calls
import axios from "axios";
const baseUrl = "/api/send-email";

const sendEmail = (formData) => {
  const request = axios.post(baseUrl, formData);
  return request.then((response) => response.data);
};

export default { sendEmail };
