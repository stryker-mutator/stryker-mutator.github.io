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
    if [ -n "$2" ]; then
      git clone --branch $2 $remoteUrl $localdir --depth 1
    else
      git clone $remoteUrl $localdir --depth 1
    fi
    cd "$localdir"

    # Tell git to only checkout docs folder
    git sparse-checkout init
    git sparse-checkout set 'docs'
  fi

  defaultBranch="$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')"
  checkoutBranch=${2:-$defaultBranch}
  git pull origin $checkoutBranch

  mv docs/* .
  cd ../
)

# cloning a different branch works like: git_clone_docs "stryker-net" "v1.0"
# stryker-js does not have docs in docs :(
git_clone_docs "stryker-js"
git_clone_docs "mutation-testing-elements" "stryker-net-v1.0"
rm -rf docs/mutation-testing-elements/packages
git_clone_docs "stryker4s"
git_clone_docs "stryker-net"
