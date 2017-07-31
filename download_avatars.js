var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');



function getRepoContributors(repoOwner, repoName, cb) {
  var GITHUB_USER = "KwinstonRoberts";
  var GITHUB_TOKEN = "d6abd9cb0c246238f18b067553e5b3a090df830c";
  var url = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors` 
  console.log(url);
}

getRepoContributors("jquery","jquery", function(err,result){
  console.log("Errors:", err);
  console.log("Result:", result);
});