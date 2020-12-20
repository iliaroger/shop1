import Axios from 'axios';
import {
  PROFILE_REGISTER_FAIL,
  PROFILE_REGISTER_REQUEST,
  PROFILE_REGISTER_SUCCESS,
  PROFILE_LOGIN_FAIL,
  PROFILE_LOGIN_REQUEST,
  PROFILE_LOGIN_SUCCESS,
  PROFILE_LOGOUT_SUCCESS,
} from '../constants/profileConstants';

export const registerAction = (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => async (dispatch: any) => {
  try {
    dispatch({
      type: PROFILE_REGISTER_REQUEST,
    });
    await Axios({
      method: 'POST',
      url: `/api/profile/register`,
      data: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    }).then(() => {
      dispatch({
        type: PROFILE_REGISTER_SUCCESS,
      });
    });
  } catch (err) {
    dispatch({
      type: PROFILE_REGISTER_FAIL,
    });
  }
};

export const loginUserAction = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    dispatch({
      type: PROFILE_LOGIN_REQUEST,
    });
    await Axios({
      method: 'POST',
      url: '/api/profile/login',
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      const { auth, firstName, lastName } = res.data;
      if (auth) {
        dispatch({
          type: PROFILE_LOGIN_SUCCESS,
          payload: {
            firstName: firstName,
            lastName: lastName,
          },
        });
      } else {
        dispatch({
          type: PROFILE_LOGIN_FAIL,
        });
      }
    });
  } catch (err) {
    if (err) {
      dispatch({
        type: PROFILE_LOGIN_FAIL,
      });
    }
  }
};

export const userLogoutAction = () => (dispatch: any) => {
  dispatch({
    type: PROFILE_LOGOUT_SUCCESS,
  });
};
