# RecordOnTheGo
Portable health record for long term refugee health care

## Gitflow - rules to follow when making changes to this project

The main 'branches' of this project are
* Master - where the code is always in a production-ready state i.e. functional, no major bugs (that we know of), and could be distributed to a wider audience.
* Develop - always contains code with the latest 'delivered development changes' i.e. this is the main branch where we develop the overall application; it can have unfinished work and not-yet-fixed bugs in it.

Other, supporting branches that can be used are (and of which we can have multiple):
* Feature - where new individual features for upcoming or future releases are developed.
* Release - where we do some last-minute dotting of the i's and crossing of the t's to get our 'Develop' code ready for the 'Master' branch
* Hotfix - where we respond quickly to an undesired state of a current 'Master' branch e.g. a major bug needs fixing. These branches are unplanned!

For a full guide to the model we're using to manage our code development, see ['A successful Git branching model'](http://nvie.com/posts/a-successful-git-branching-model/)

## Prototype site
[empowerhack.github.io/RecordOnTheGo](http://empowerhack.github.io/RecordOnTheGo/prototype/)

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
