'use strict'

function getRepos (userInput) {
  let url = `https://api.github.com/users/${userInput}/repos`;

//get api and create json format
  fetch(url)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson));
};

function displayResults (responseJson) {
  //remove previous results
  $('#results-list').empty();

  for(let i = 0; i < responseJson.length; i++) {
    $('#results-list').append(`<li>
    <h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
    </li>`)
  }

  //add list item from results
  $('#results-list').append(resultString);
};

//listen for submit event
function watchSubmit() {
  $('#search-form').submit(event => {
    //stop default behavior
    event.preventDefault();

    //save value of search bar text
    let userSearch = $('#search-bar').val();

    console.log(userSearch);
    //run getRepos funtion
    getRepos(userSearch);
  });
};

//on app load run watchSubmit function
$(watchSubmit);