import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/userProfileComponent.module.scss';
import { userLogoutAction } from '../actions/profileActions';

export default function UserProfileComponent() {
  const userData = useSelector((state: any) => state.login);
  const { firstName, lastName } = userData;
  const dispatch = useDispatch();
  return (
    <div className={styles.box}>
      <div className={styles.element}>
        <h2>{`Welcome, ${firstName} ${lastName}`}</h2>
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => {
              dispatch(userLogoutAction());
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
