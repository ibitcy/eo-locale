workflow "TSC, Test, Build and Publish" {
  on = "push"
  resolves = ["Publish docs"]
}

action "Install" {
  uses = "actions/npm@master"
  runs = "yarn"
  args = "install"
}

action "Build docs" {
  needs = "Install"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "docz:build"
}

action "Publish docs" {
  needs = "Build docs"
  uses = "maxheld83/ghpages@v0.1.1"
  env = {
    BUILD_DIR = ".docz/dist"
  }
  secrets = ["GITHUB_TOKEN"]
}
