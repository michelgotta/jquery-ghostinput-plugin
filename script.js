$(document).ready(function() {
  $('#ghostinput').ghostInput({
    ghostText: ".yourdomain.com", // Ghosttext after the users input
    ghostLabel: "URL", // Label
    change: function() {
      // Run something on each change
    }
  });
  $('#ghostinput').focus();
  $('#ghostinput2').ghostInput();
});
