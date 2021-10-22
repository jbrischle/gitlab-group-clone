const request = require('request');
const clone = require('git-clone');

const gitlabApiUrl = 'https://gitlab.example.com/api/v4/';
const groupId = 557;
const privateToken = 'XXX';
const baseDir = 'C:\\GIT';

const options = {
    'method': 'GET',
    'url': gitlabApiUrl + 'groups/' + groupId + '/projects?archived=false&simple=true&per_page=100',
    'headers': {
        'PRIVATE-TOKEN': privateToken,
        'Content-Type': 'application/json',
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    process.chdir(baseDir);
    Array.from(JSON.parse(response.body)).forEach(project => {
        const targetPath = project.namespace.full_path + '/' + project.path;
        clone(project.ssh_url_to_repo, targetPath);
        console.log('cloned: ' + project.web_url + ' to ' + targetPath)
    });
});
