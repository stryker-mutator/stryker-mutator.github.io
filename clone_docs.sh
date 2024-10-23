#!/usr/bin/env bash
set -e

# Allows for glob in mv commands, needed to exclude `docs` folder
shopt -s extglob

# Clones the `docs` folder of each stryker repository
function git_clone_docs() (
  remoteUrl="https://github.com/stryker-mutator/$1.git"
  localDir="$1"

  cd docs

  # Update folder if it already exists
  if [ -d "$localDir" ]
  then
    echo "$localDir already exists. Updating..."
    cd $localDir

    # Move files back into docs to pull
    mv !(docs) docs
  else
    # Create new empty git repository and pull only docs folder to it
    echo "Cloning $localDir from git..."

    # Check if specific branch should be pulled
    if [ -n "$2" ]; then
      git clone --branch "$2" $remoteUrl $localDir --depth 1 --no-checkout
    else
      # Pull the latest release tag branch from remote
      git clone $remoteUrl $localDir --depth 1 --no-checkout
    fi

    cd $localDir
  fi

  # Tell git to only checkout docs folder
  git fetch --tags
  latestTag=$(git describe --tags "$(git rev-list --tags --max-count=1)")

  echo "Checking out $localDir w/ release tag $latestTag."
  git sparse-checkout set 'docs'
  git checkout $latestTag
  git sparse-checkout disable

  # Remove everything in the root that is not in docs
  rm -rf !(docs)

  mv docs/* .
  cd ../
)

# cloning a different branch works like: git_clone_docs "stryker-net" "v1.0"
git_clone_docs "stryker-js"
git_clone_docs "mutation-testing-elements"
rm -rf docs/mutation-testing-elements/packages
git_clone_docs "stryker4s"
git_clone_docs "stryker-net"
