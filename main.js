var state = {};

function setState() {
  Object.assign(state);
  
  ReactDOM.render(
    React.createElement(MainView, Object.assign({}, state)),
    document.getElementById('react-app')
  );
}

setState({});
