import axiosClient from "./axiosCLient";

const LoginApi = {
  isLogin: (email) => {
    const url = `/api-key?email=${email} `;
    return axiosClient.get(url, { email });
  },
};
export default LoginApi;
//Get ApiKey: /api-key?email={email đăng ký F8} (GET) Query: email
