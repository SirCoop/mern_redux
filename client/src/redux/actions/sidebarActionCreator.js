const sidebarActionCreators = {
  toggleSidebar: isSidebarOpen => (dispatch) => {
    return dispatch({
      type: 'TOGGLE_SIDEBAR',
      payload: isSidebarOpen,
    });
  }
};

export default sidebarActionCreators;