import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CONSTANTS from '../../../constants';
import styles from './LoginButtons.module.sass';
import { clearUserStore } from '../../../actions/actionCreator';

const LoginButtons = ({props}) => {
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch(clearUserStore());
    props.history.replace('/login');
  };

  const render = () => {
    if (props.data) {
      return (
        <>
          <div className={styles.userInfo}>
            <img
              src={
                props.data.avatar === 'anon.png'
                  ? CONSTANTS.ANONYM_IMAGE_PATH
                  : `${CONSTANTS.publicURL}${props.data.avatar}`
              }
              alt='user'
            />
            <span>{`Hi, ${props.data.displayName}`}</span>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
              alt='menu'
            />
            <ul>
              {CONSTANTS.HEADER_LOGIN_BUTTONS.map((el, index) => (
                <li key={index}>
                  <Link to={el.path} style={{ textDecoration: 'none' }}>
                    <span>{el.text}</span>
                  </Link>
                </li>
              ))}
              <li>
                <span onClick={logOut}>Logout</span>
              </li>
            </ul>
          </div>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
            className={styles.emailIcon}
            alt='email'
          />
        </>
      );
    }
    return (
      <>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>LOGIN</span>
        </Link>
        <Link to='/registration' style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>SIGN UP</span>
        </Link>
      </>
    );
  };
  return render();
};

export default withRouter(LoginButtons);
