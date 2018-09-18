
var rp = require('request-promise');
var toNumberString = ['' , 'one', 'two', 'three'];

var options = {
    uri:'https://api.github.com/users/DiegoCardozo94/repos',
    qs: {
        access_token: 'XXXX-XXXX' 
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true 
};

rp(options)
    .then((repos)=> {
        var repo = repos.length;

        if (repo == 0) {
            console.log('No repositories');
        }else if (repo > 0 && repo <= 3){ 
            console.log('There are '+toNumberString[repo]+' repositories');
        }else if(repo > 0){ 
             console.log('There are a lot of repositories');
        } 
    })

    .catch((err)=> {
        console.log('I cannot connect to the server');
    });

