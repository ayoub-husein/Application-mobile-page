$(document).ready(function(){
    var wow = new WOW(
        {
          mobile:       false,       
        }  
        );
      wow.init();

      $("#input-validit").validate();
})
