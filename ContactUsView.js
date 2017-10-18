var ContactUsView = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'ContactView'},

      React.createElement('div', {className: 'ImageContainer'},
        React.createElement('img', { src: 'baby.png', height: 42 }, "babypad" ),
        React.createElement('div', {className: 'div'}, "\n")
      ),
      React.createElement('div', {className: 'EmailContainer'},
        React.createElement('text', {className: 'text'}, "For questions, comments and suggestions, \n email us at "),
        React.createElement('a', {href: 'mailto:babypadapp@gmail.com'}, 'babypadapp@gmail.com')
      )
      )
    )
  },
});
