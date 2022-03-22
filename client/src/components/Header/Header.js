import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore, headerRequest } from '../../actions/actionCreator';
import Logo from '../Logo';
import LoginButtons from './LoginButtons/LoginButtons';

class Header extends React.Component {
  componentDidMount () {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

  startContests = () => {
    this.props.history.push('/startContest');
  };

  mappingNavMenu = () => {
    return CONSTANTS.HEADER_NAVMENU_ITEMS.map((item, i) => (
      <li key={i}>
        <span>{item.title}</span>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt='menu' />
        <ul>
          {item.list.map((elem, index) => (
            <li key={index}>
              <a
                href={CONSTANTS.PSEUDO_URL}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                {elem}
              </a>
            </li>
          ))}
        </ul>
      </li>
    ));
  };

  render () {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <div className={styles.fixedHeader}>
          <span className={styles.info}>
            Squadhelp recognized as one of the Most Innovative Companies by Inc
            Magazine.
          </span>
          <a href={CONSTANTS.PSEUDO_URL}>Read Announcement</a>
        </div>
        <div className={styles.loginSignnUpHeaders}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt='phone' />
            <span>(877)&nbsp;355-3585</span>
          </div>
          <div className={styles.userButtonsContainer}>
            <LoginButtons props={this.props} />
          </div>
        </div>
        <div className={styles.navContainer}>
          <Logo />
          <div className={styles.leftNav}>
            <div className={styles.nav}>
              <ul>{this.mappingNavMenu()}</ul>
            </div>
            {this.props.data && this.props.data.role !== CONSTANTS.CREATOR && (
              <div
                className={styles.startContestBtn}
                onClick={this.startContests}
              >
                START CONTEST
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.userStore;
const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
