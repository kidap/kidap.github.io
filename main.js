
var state = {};

function setState() {
  Object.assign(state);
  
  ReactDOM.render(
    React.createElement(ContactUsView, Object.assign({}, state)),
    document.getElementById('react-app')
  );
}

setState({});