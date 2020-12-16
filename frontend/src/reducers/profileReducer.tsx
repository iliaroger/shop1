import {
  PROFILE_REGISTER_FAIL,
  PROFILE_REGISTER_REQUEST,
  PROFILE_REGISTER_SUCCESS,
  PROFILE_LOGIN_FAIL,
  PROFILE_LOGIN_REQUEST,
  PROFILE_LOGIN_SUCCESS,
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
      return { loading: false, authenticated: action.payload };

    case PROFILE_LOGIN_FAIL:
      return { loading: false, authenticaed: action.payload };

    default:
      return state;
  }
};
