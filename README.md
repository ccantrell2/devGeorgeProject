# Cohen's Day Log🦭

<p align="left">
  <h2>Authorship🖊️</h2>
   <b>Author:</b> Cohen Cantrell
</p>

<p align="left">
  <h2>Attribution👾</h2>
  * https://getbootstrap.com/docs/5.0/components/modal/<br>
  * https://codepen.io/barrycumbie/pen/LEPmgdB<br>
  * https://github.com/barrycumbie/jubilant-garbanzo-easy-read<br>
  * https://www.w3schools.com/tags/att_input_type_date.asp<br>
  * https://getbootstrap.com/docs/4.0/components/card/<br>
</p>

<p align="left">
  <h2>A User Story🧔</h2>
  <p>As a <strong>average human who does things and uses websites</strong><br> I want <strong>to be able to log my daily activities</strong><br> so that <strong>I can look back on the good times and see what all I do in a day.</strong></p>
</p>

<p align="left">
<h2>Narrative📖</h2>
  I created this application to keep track of what I do everyday. I wanted to keep a kinda virtual diary, so I can go back and see what I did. I wanted to do this so I could be nostalgic if I wanted to or more importantly, I can go back and see if I did things that I was supposed to do. I decided to create this app for my first web dev project. It went well the first time, so i decided to bring it back for my last web dev project.<br>

Here is an example of what my app looks like:<br>
<img src="images/devGeorgeProject.png" alt="devGeorgeExample"><br>

Here is a little example of my HTML code that makes my navbar:
```HTML
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cohen's Day Log App 🦾</a>

<button id="login" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Login
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Please Enter Username and Password</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" id="username" class="form-control mb-2" placeholder="Username">
        <input type="password" id="password" class="form-control mb-2" placeholder="Password">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Enter</button>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  </div>
</nav>
```

Here is also an example of what insired my Bs5 modal login:<br>
<img src="images/exampleLogin.png" alt="UNA Login"><br>
</p>

<p align="left">
<h2>Code I Think is Cool💻</h2>
I think this code from my project is pretty cool. It is a Javascript file that reads a JSON file and displays it in the DOM. The first section calls the function of logData. The second section creates a list of cards in which the data from the JSON file is placed in. I find it cool becuase I've never worked with a JSON file and It is cool how we can create an array of sets and present it in the DOM.

```Javascript
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
```
<a href="https://github.com/ccantrell2/devGeorgeProject/blob/main/scripts/script.js" target="_blank">Cohen's Day Log Javascript</a>

<p align="left">
<h2>Future Ideas🔮</h2>
<a href="https://github.com/ccantrell2/devGeorgeProject/issues/1#issue-3027860371" target="_blank">Future Ideas Issue</a>
</p>




