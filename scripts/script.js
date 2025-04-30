$(document).ready(function(){
   
    // change login button to logout
    $("#login").on("click", function(){
     
      let statusText = underConstruction("logout button");      
      $("#login").text(statusText).prop(   "disabled", true);
      
    });

    function underConstruction(status){
      return "Logout"
    };
  }
);
// fetch JSON
fetch('data/logData.json')
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

// JSON written to the DOM
function displayLogData(logData) {
  const container = $("#logDay");
  container.empty();

  $.each(logData, (index, log) => {
    container.append(`
        <div id="div${index}"class="card">
          <div class="card-body">
            <h5 class="card-title"><strong>${log.date}</strong></h5>
            <p id="note${index}"class="card-text">${log.note}</p>
            <button id="edit${index}" class="btn btn-primary">Edit</button> 
            <button id="delete${index}" class="btn btn-primary">Delete</button >
          </div>
        </div>
    `);

     // edit data
    $(`#edit${index}`).on('click', function() {
      const buttonId = $(this).attr('id');

      $(this).prev('p').attr('contenteditable','true');
      console.log($(this).prev('p').attr('id'))
    
    }); 

     // delete data
    $(`#delete${index}`).on('click', function() {
      const buttonId = $(this).attr('id');
     console.log(buttonId); 
      $(`#div${index}`).hide();   
  
    }
      
    );
     
  });



}

// applie username to nav bar
$('#enterLogin').on('click', function() {
console.log('button clicked');
let uname = $('#username').val();
console.log(uname);
$('#welcome').text('Welcome ' + uname);
}); 

