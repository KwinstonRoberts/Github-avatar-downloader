var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var fs = require('fs');

function getRepoContributors(repoOwner, repoName, cb) {
  var GITHUB_USER = "KwinstonRoberts";
  var GITHUB_TOKEN = "1fcd546c798967f1a00ad42e5fd59e6a5b9600bf";
  if(!process.argv[2] || !process.argv[3]){
    console.log("You must provide both a repo owner and the name of the repo as arguments.");
  }else{
    var url = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors` 
    var options = {
      url:url,
      headers:{
        'User-Agent': 'github avatar Downloader'
      },
      json:true
    }
    request(options,function(err,response,body){
      return cb(err,body);
    });
  }
}

getRepoContributors(process.argv[2],process.argv[3], function(err,result){
  if(!err){
    for(x in result){
      downloadImageByURL(result[x].avatar_url, `avatars/${result[x].login}`);
    }
  }
});

function downloadImageByURL(url, filePath) {
  request(url)
    .on('error',function(err){
      throw err;
    })
    .on('response',function(response){
      console.log('fetched image at: ', url);
    })
    .pipe(fs.createWriteStream("./" + filePath + ".jpg"));
  }