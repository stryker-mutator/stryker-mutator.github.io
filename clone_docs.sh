#!/usr/bin/env bash
set -e

# Allows for glob in mv commands, needed to exclude `docs` folder
shopt -s extglob

# Clones the `docs` folder of each stryker repository

function git_clone_docs() (
  remoteUrl="https://github.com/stryker-mutator/$1.git"
  localdir="$1"

  cd docs

  # Update folder if it already exists
  if [ -d $localdir ]
  then
    echo "$1 already exists. Updating..."
    cd $localdir

    # Move files back into docs to pull
    mv !(docs) docs
  else
    echo "Cloning $localdir..."
    # Else create new empty git repository and pull only docs folder to it
    git clone $remoteUrl $localdir --depth 1
    cd "$localdir"

    # Tell git to only checkout docs folder
    git sparse-checkout init
    git sparse-checkout set 'docs'
  fi

  defaultBranch="$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')"
<<<<<<< HEAD
  checkoutBranch="$2"
  if [ -n "$checkoutBranch" ]; then
    git fetch origin $checkoutBranch --depth 1
    git checkout $checkoutBranch
  else 
    git pull origin $defaultBranch
  fi
=======
  checkoutBranch=${2:-$defaultBranch}
  git checkout $checkoutBranch
  git pull origin $checkoutBranch
>>>>>>> 31c0ff08d9f8066815457a29ea955177e7c72830

  mv docs/* .
  cd ../
)

# stryker does not have docs in docs :(
# cloning a different branch works like: git_clone_docs "stryker-net" "v1.0"
git_clone_docs "stryker-js"
git_clone_docs "mutation-testing-elements"
rm -rf docs/mutation-testing-elements/packages
git_clone_docs "stryker4s"
git_clone_docs "stryker-net" "v1.0"
