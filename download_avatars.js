var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');



function getRepoContributors(repoOwner, repoName, cb) {
  var GITHUB_USER = "KwinstonRoberts";
  var GITHUB_TOKEN = "1fcd546c798967f1a00ad42e5fd59e6a5b9600bf";
  var url = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors` 
  var options = {
    url:url,
    headers:{
      'User-Agent': 'github avatar Downloader'
    }
  }
  request(options,function(err,response,body){
    return cb(err,body);
  })
}

getRepoContributors("jquery","jquery", function(err,result){
  console.log("Errors:", err);
  console.log("Result:", result);
});