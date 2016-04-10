# RecordOnTheGo
Portable health record for long term refugee health care

## Prototype site
[empowerhack.github.io/RecordOnTheGo](http://empowerhack.github.io/RecordOnTheGo)

There is a gh-pages prototype site. This is kept on a `gh-pages` branch. Never ake changes to this branch, it is only meant to host the pages site. To update the pages site:

```
## Make sure you're on the master branch and pull the latest changes:
git checkout master && git pull

## Checkout gh-pages branch and merge master in:
git checkout gh-pages && git merge master

## Push changes to gh-pages: 
git push origin gh-pages

## Switch back to master (or the branch you are working on) to ensure gh-pages doesn't get any local changes: 
git checkout master
```
