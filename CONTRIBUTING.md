# Contributing

We use [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

**Clone** this repository. If you don't have access to push changes, ask for access on Slack.

## Branches

* `master` protected branch with CI / CD, generally updated via `develop`
* `develop` (default) - open new feature branches from here
* `<organization>/<feature>` feature branches should be used to add changes. Recommended branch name example `bragi/sym-12-story-content`

## Peer Review

Open Pull Requests on github and target the `develop` branch.

## Example flow

### Initial setup

```bash
cd `your-project-directory`
git clone https://github.com/mathina-eu/mathina.git
cd mathina
```

### Working on a new feature

```bash
# fetch latest state
git fetch
# checkout out develop
git checkout develop
# create your new feature branch, let's call it bragi/demo-branch
git checkout -b bragi/demo-branch

# ...
# make some changes
# ...

# Stage + Commit your changes 
git add changed-files
git commit -m "Added some new files"

# Push commit
git push -u origin bragi/demo-branch
```

Next open up https://github.com/mathina-eu/mathina/pulls and create a Pull Request using your new 
feature branch and targeting the `develop` branch. Once peer reviewed, your changes will be merged
into develop. You can request develop to be merged to `master` on Slack.
