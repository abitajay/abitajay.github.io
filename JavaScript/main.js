$(document)
    .ready(()=>{
     // set API call upon submit button click New Note
        $("#submit").click(function(){   
            
            //clear previous results 
            $("#GIFresults").empty();
    
            // get search value from input
            let userInput = $("#search").val()
    
            // use search value from input in API call
            $.ajax({
                type: "get",
                url:`https://api.giphy.com/v1/gifs/search?api_key=sb4Bp20TyZX1Hj9OCmy6BPOpR8f5429Y&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
                data: "data",
                dataType: "JSON",
                
                // parse results to get images/gifs
                success: function (response) {  
                 let GIFsearch = response.data
                
                 // get images and update HTML with results
                 $.each(GIFsearch, (i,e)=>{
                        let GIFobj = e.images.original.url
                        $("#GIFresults").append(`<img src= ${GIFobj} alt = "GIF image"/>`)                       
                 })
                }
            });
                
        });
  
    });