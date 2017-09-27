$.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    cache: false,
    contentType: 'application/json',
    datatype: "json",
    url: '/',
    success: function(returns){
        if (returns) 
            alert("User save");
        else
            alert("Error: user not save");
    }
  });
  