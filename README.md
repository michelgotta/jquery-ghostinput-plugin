# jQuery ghostInput Plugin

Adds a non editable ghosttext to a textinput
after the cursor seen on the URL selection on
the http://www.tumblr.com/ registration.

## Demo
http://michelgotta.de/ghost-input-demo/

## Setup
```javascript
$('#ghostinput').ghostInput({
  ghostText: ".yourdomain.com", // Ghosttext after the users input
  ghostLabel: "URL", // Label
  change: function() {
    someCallbackFunction();
  }
});
```
