#!/usr/bin/env bash
set -e

# Allows for glob in mv commands, needed to exclude `docs` folder
shopt -s extglob

# Clones the `docs` folder of each stryker repository

function git_clone_docs() (
  rurl="https://github.com/stryker-mutator/$1.git"
  localdir="./$1"

  cd docs

  # Update folder if it already exists
  if [ -d $localdir ]
  then
    echo "$1 already exists. Updating..."
    cd $localdir

    # Move files back into docs to pull
    mv !(docs) docs
  else
    echo "Cloning $1..."
    # Else create new empty git repository and pull only docs folder to it
    mkdir "$localdir"
    cd "$localdir"

    git init
    git remote add -f origin "$rurl"

    # Tell git to only checkout docs folder
    git sparse-checkout init
    git sparse-checkout set '/docs'
  fi

  git pull origin master

  mv docs/* .
  cd ../
)

function git_clone() (
  rurl="https://github.com/stryker-mutator/$1.git"
  localdir="./$1"

  cd docs

  # Update folder if it already exists
  if [ -d $localdir ]
  then
    echo "$1 already exists. Updating..."
    cd $localdir
  else
    echo "Cloning $1..."
    # Else create new empty git repository and pull only docs folder to it
    mkdir "$localdir"
    cd "$localdir"

    git init
    git remote add -f origin "$rurl"

  fi

  git pull origin master

  cd ../
)

# stryker does not have docs in docs :(
# git_clone_docs "stryker"
git_clone_docs "stryker4s"
git_clone_docs "stryker-net"
git_clone "stryker-handbook"
