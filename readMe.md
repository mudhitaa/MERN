# Learning Basics of node, js and git
GIT 
push and push
use ssh






# linking to any repo 
-`git remote set-url origin <new_repo_url>`

# check changes in file 
-`git status`
 
# check origin for any repo
-`git remote -v`


# 1. first code locally and empty repo
    - connect your repo locally
        -`git init `
        -`git remote add origin <url>`

    - stage(commiting)
        -`git add .`  =every changes add for commit
        -`git commit -m "your message"`  =commit the changes

    - push
        -`git push origin main` =gitpush origin <branch>[:remote branch name]



# 2. repo full =>setup to local
    -`git clone <url>`

    - if conflict when commiting (same file changed by two people) then 
        -first choose one of the options 
        -`git add .`
        -`git commit -m "your message"`  =commit the changes


    --git config -- global pull.rebase false

# 3. branch checkout 
    -`git checkout -b <branchname >` //new branch
    -`git branch` //list branches





# node project 
 - node_modules/
 - package.json   ~<paackagemanager>.lock.json
    -library manage(dependency manager)
        -server -http/https ->1.10.2------->2.0.0 





package managers:
npm yarn pnpn deno bun


we use pnpm
