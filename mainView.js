var MainView = React.createClass({
    render: function() {
      return (
        React.createElement('div', {className: 'Main View'},
          React.createElement(contactUsView, Object.assign({}, state)),
          React.createElement(privacyView, Object.assign({}, state)),
        )
      )
    }
}) 