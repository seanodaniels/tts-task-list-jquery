$(document).ready(function() {

  // Page Element Assignments and Variables

  var nextId = 0; // Initialize ID assignment

  // Listeners

  $('#addTaskButton').click(function(event) {

    // Check to see if the value is empty
    if ($('#taskName').val()) {
      // Add new task
      $('#taskName').removeClass('warning');
      $('#task-list-01').append(
        '<li><input type="checkbox" class="deleteCheck" id="entry' + nextId + '">' +
        '<label for="entry' + nextId++ + '">' + $('#taskName').val() + '</label>' +
        '</li>'
      );
    } else {
      // Nothing to add. Give warning.
      $('#taskName').addClass('warning');
      console.log("Nothing to add. Enter in a value.");
    }

  });

  // Delete any element that is checked
  $(document).on('change', '.deleteCheck',
    function() {
      if ($(this).is(':checked')) {
        // First throw a strikeout on it, then delete.
        thisOne = $(this); // Bind this
        thisOne.next().addClass('strikeOutDelete');
        setTimeout(function() {
          thisOne.parent().remove();
        }, 1000);

      };
    });


});
