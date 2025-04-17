// login.js

import {apiClient} from './api';
import {BASE_URL, LOGIN, POST_METHOD, VERIFY_OTP} from './url';

export const Login = payload => {
  return apiClient({
    baseURL: BASE_URL,
    method: POST_METHOD,
    url: LOGIN,
    data: payload,
  });
};

export const VerifyOtp = payload => {
  return apiClient({
    baseURL: BASE_URL,
    method: POST_METHOD,
    url: VERIFY_OTP,
    data: payload,
  });
};
