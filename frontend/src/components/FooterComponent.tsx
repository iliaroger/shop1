import React from 'react';
import style from '../styles/footer.module.scss';

export default function FooterComponent() {
  return (
    <React.Fragment>
      <div className={style.box}>
        <p>instagram</p>
        <p>twitter</p>
        <p>youtube</p>
        <p>help</p>
      </div>
    </React.Fragment>
  );
}
