function loadRepo() {
  let gitHubRequest = new XMLHttpRequest();

  gitHubRequest.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      loadRepoCallback(JSON.parse(this.responseText));
    }
  }
  gitHubRequest.open('GET', 'https://api.github.com/users/b-dewaynestaton/repos', true);
  gitHubRequest.send();
}

function loadRepoCallback(gitHub) {

  let user = `<h1>${gitHub.name}</h1><p>${"https://github.com/b-dewaynestaton/"}</p>`;

  document.querySelector('#displayGH').innerHTML = user;
}

loadRepo();
