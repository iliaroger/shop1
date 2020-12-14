import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/footer.module.scss';

export default function FooterComponent() {
  const storeData = useSelector((state) => state);
  const lastSeen = () => {
    let store = localStorage.getItem('lastOnline');
    return `${store}`;
  };

  useEffect(() => {
    lastSeen();
  }, [storeData]);

  return (
    <React.Fragment>
      <div className={style.box}>
        <p>instagram</p>
        <p>twitter</p>
        <p>youtube</p>
        <p>help</p>
        <h6 className={style.lastOnline}>Last Online: {lastSeen()}</h6>
      </div>
    </React.Fragment>
  );
}
