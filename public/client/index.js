
$( document ).ready(function() {
  $('form').submit(function(event) {
    // event.preventDefault();
    // var formData = new FormData();
    
    // // var formData = {
    // //   'file': $('input[name=file]').val()
    // // }
    
    // var file = $('input[name=file]').val();
    // formData.append("file", file);
   var data = new FormData(this);
// jQuery.each(jQuery('#file')[0].files, function(i, file) {
//     data.append('file-'+i, file);
// });
    
    
    $.ajax({
      type: 'POST',
      url: '/upload',
      processData: false,
      contentType: false,
      cache: false,
      data: data,
      success: function(data){
        
        alert(data.size);
      }
      
  });
  
  return false;
  })
  
  


 
});
  