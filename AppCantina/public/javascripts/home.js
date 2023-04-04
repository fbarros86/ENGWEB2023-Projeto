$(function(){
 
})

function showImage(fname, ftype){
  if((ftype=='image/png')||(ftype=='image/jpeg')){
      var ficheiro = $('<img src="/fileStore/'+f.name+ '"width ="80%"/>')
      var download = $('<div><a href="/download/'+f.name+ '>Download</a></div>')
      $("#display").empty()
      $("#display").append(ficheiro,download)
      $("#display").modal()
  }
  else if(ftype=='application/json')
      $.get('/fileContents/'+fname, function(response){
          var contents = response
          var ficheiro=$('<pre>'+ contents +'</pre>')
          var download = $('<div><a href="/download/'+f.name+ '>Download</a></div>')
          $("#display").empty()
          $("#display").append(ficheiro,download)
          $("#display").modal()
      })
      .fail(function(error){
          console.log(error)
      })
  else{
      var ficheiro = $('<p>'+fname +'</p>')
      var download = $('<div><a href="/download/'+f.name+ '>Download</a></div>')
      $("#display").empty()
      $("#display").append(ficheiro,download)
      $("#display").modal()
  }
  
}
