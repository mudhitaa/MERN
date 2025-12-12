
GIT 
push and push
use ssh


BASH MA

ASUS@Mudhita MINGW64 ~/Desktop/broadway/start/a. Javascript (main)
ASUS@Mudhita MINGW64 ~/Desktop/broadway/start/a.ASUS@Mudhita MINGW64 ~/Desktop/broadway/start/a. Javascript (main)
ASUS@Mudhita MINGW64 ~/Desktop/broadway/start/a. Javascript (main)
$ ssh-keygen

Generating public/private ed25519 key pair.
Enter file in which to save the key (/c/Users/ASUS/.ssh/id_ed25519):
Enter passphrase for "/c/Users/ASUS/.ssh/id_ed25519" (empty for no passphrase):
Enter same passphrase again: 

Your identification has been saved in /c/Users/ASUS/.ssh/id_ed25519
Your public key has been saved in /c/Users/ASUS/.ssh/id_ed25519.pub
The key fingerprint is:

SHA256:X9GLkvOfQJVHGD44m5XVFRkU9ccMfadcl723cH+dF+g ASUS@Mudhita
The key's randomart image is:
+--[ED25519 256]--+
|              +O/|
|             +.@X|
|            +.Xo@|
|           . @oBo|
|        S + B + B|
|         . * E o=|
|          . o   o|
|             o . |
|              o  |
+----[SHA256]-----+

ASUS@Mudhita MINGW64 ~/Desktop/broadway/start/a. Javascript (main)
$




.pub is public key yo chain share garne ho aru lai






linking to any repo 
-`git remote set-url origin <new_repo_url>`

check changes in file 
-`git status`
 
check origin for any repo
-`git remote -v`


1. first code locally and empty repo
    **connect your repo locally
        -`git init `
        -`git remote add origin <url>`

    **stage(commiting)
        -`git add .`  =every changes add for commit
        -`git commit -m "your message"`  =commit the changes

    **push
        -`git push origin main` =gitpush origin <branch>[:remote branch name]



2. repo full =>setup to local
    -git clone <url>

    --git config -- global pull.rebase false