// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable( {
    "lengthMenu": [ [100, 300, 500, -1], [100, 300, 500, "All"] ],
    stateSave: true
  } );
});
