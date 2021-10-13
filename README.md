# Gitlab group clone

- Clone up to 100 repositories contained in a group
- This doesnt include projects from sub-groups
- Will create directories according to the gitlab path (e.g. pim/libraries/_REPO_NAME_)

## Variables to configure
```
gitlabApiUrl: e.g. https://gitlab.example.com/api/v4/
groupId: e.g. 123
privateToken: https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html
baseDir: e.g.'C:\\GIT';
```
