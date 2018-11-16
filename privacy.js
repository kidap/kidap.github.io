var privacyView = React.createClass({
    render: function() {
      return (
        React.createElement('div', {className: 'PrivacyView'},
  
        React.createElement('div', {className: 'Privacy Policy'},
          React.createElement('div', {className: 'PrivacyTitle'}, "Data Privacy \n"),
          React.createElement('div', {className: 'PrivacyText'}, "We do not store any data. All the data is saved on your device and backed up via iCloud. We don’t even have servers to store any kind of data."),
          React.createElement('div', {className: 'PrivacyText'}, " \n"),
          React.createElement('div', {className: 'PrivacyText'}, "We are using an analytics tool called Mixpanel that helps us improve your user experience. It basically allows us to see the features and events that are used. The data collected by Mixpanel will then be deleted after 60 days. However, there is no way for us to see any data related to the profile you have created. That means names, birthdays and images are only on your devices."),
          React.createElement('div', {className: 'PrivacyText'}, "\n"),
          React.createElement('div', {className: 'PrivacyText'}, "We also use Sentry, an error tracking that helps us monitor and fix crashes. It basically just sends us information related to the state of the app if it crashes."),
          React.createElement('div', {className: 'PrivacyText'}, "\n"),
          React.createElement('div', {className: 'PrivacyText'}, "If you want to request for the for the data collected by the tools mentioned above or request for deletion of those data, please send an email to babypadapp@gmail.com and provide the distinct id found on the Data Policy section of the app."),
          // React.createElement('text', {className: 'privacyText'}, "Privacy Policy"),
        )
        )
      )
    },
  });
  