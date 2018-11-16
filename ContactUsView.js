var contactUsView = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'ContactView'},

      React.createElement('div', {className: 'ImageContainer'},
        React.createElement('img', { src: './baby.png', height: 42 } ),
        React.createElement('text', {className: 'text'}, "babypad")
      ),

      React.createElement('div', {className: 'ContactUs'}, "Contact us\n"),
      
      React.createElement('div', {className: 'EmailContainer'},
        React.createElement('text', {className: 'emailText'}, "For questions, comments and suggestions, \n email us at "),
        React.createElement('a', {href: 'mailto:babypadapp@gmail.com'}, 'babypadapp@gmail.com')
      )
      )
    )
  },
});
