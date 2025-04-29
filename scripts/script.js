$(document).ready(function(){
   
  
    $("#login").on("click", function(){
     
      let statusText = underConstruction("logout button");      
      $("#login").text(statusText).prop(   "disabled", true);
      
    });

    function underConstruction(status){
      return "Logout"
    };
  }
);

fetch('https://ccantrell2.github.io/devGeorgeProject/data/logData.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); 
})
.then(data => {
    console.log(data);
    displayLogData(data.logData);
})
.catch(error => {
    console.error('Fetch Error :-S', error);
}); 

function displayLogData(logData) {
    const container = $("#logDay");
    container.empty();
  
    $.each(logData, (index, log) => {
      container.append(`
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><strong>${log.date}</strong></h5>
              <p class="card-text">${log.note}</p>
              <a href="#" class="btn btn-primary">Edit</a>
              <a href="#" class="btn btn-primary">Delete</a>
            </div>
          </div>
      `);
    });
  }

