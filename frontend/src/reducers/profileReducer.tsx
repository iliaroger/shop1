import {
  PROFILE_REGISTER_FAIL,
  PROFILE_REGISTER_REQUEST,
  PROFILE_REGISTER_SUCCESS,
  PROFILE_LOGIN_FAIL,
  PROFILE_LOGIN_REQUEST,
  PROFILE_LOGIN_SUCCESS,
  PROFILE_LOGOUT_SUCCESS,
} from '../constants/profileConstants';

export const userRegisterReducer = (
  state = { loading: false },
  action: any
) => {
  switch (action.type) {
    case PROFILE_REGISTER_REQUEST:
      return { loading: true };

    case PROFILE_REGISTER_SUCCESS:
      return { loading: false };

    case PROFILE_REGISTER_FAIL:
      return { loading: false };

    default:
      return state;
  }
};

export const userLoginReducer = (state = { loading: false }, action: any) => {
  switch (action.type) {
    case PROFILE_LOGIN_REQUEST:
      return { loading: true };

    case PROFILE_LOGIN_SUCCESS:
      const { firstName, lastName } = action.payload;
      return {
        loading: false,
        authenticated: true,
        firstName: firstName,
        lastName: lastName,
      };

    case PROFILE_LOGIN_FAIL:
      return { loading: false, authenticaed: false };

    case PROFILE_LOGOUT_SUCCESS:
      return {
        loading: false,
        authenticated: false,
        firstName: '',
        lastName: '',
      };

    default:
      return state;
  }
};
