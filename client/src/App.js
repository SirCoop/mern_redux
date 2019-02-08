import React from 'react';
import fp from 'lodash/fp';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import Router from './routes';
import sidebarActionCreators from './redux/actions/sidebarActionCreator';

const styles = {
  sidebarIsOpen: {
    transition: 'all .2s',
    paddingLeft: 225,
  },
  sidebarIsClosed: {
    transition: 'all .2s',
    paddingLeft: 75,
  },
};

const App = (props) => {
  const { onToggleSidebarOpen, isSidebarOpen, classes, model } = props;

  return (
    <div>
      <React.Fragment>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => onToggleSidebarOpen(isSidebarOpen)}
        />
        <div className={classnames({
          [classes.sidebarIsOpen]: isSidebarOpen,
          [classes.sidebarIsClosed]: !isSidebarOpen,
        })}
        >
          <Router />
        </div>
      </React.Fragment>
    </div>
  );
};

const mapStateToProps = ({
  isSidebarOpen
}) => ({
  isSidebarOpen,
});

const mapDispatchToProps = dispatch => ({
  onToggleSidebarOpen: currentState => {
    dispatch(sidebarActionCreators.toggleSidebar(!currentState));
  },
});

const ConnectedApp = fp.compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(App);

export default ConnectedApp;