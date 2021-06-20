import React from 'react';
import style from './landing.module.css';
import LandingContent from '../../components/LandingContent/LandingContent';

const landing = () => (
  <>
    <div className={style.landing}>
      <LandingContent />
    </div>
  </>
);

export default landing;
