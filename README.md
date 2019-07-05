# vzasadnyy.com

1.  Install [Node.js](www.nodejs.org) and [Ruby](https://www.ruby-lang.org/)
2.  Run `gem install bundler`
3.  Install 'grunt-cli' and 'bower' globally with `npm install -g grunt-cli bower`
4.  `$cd` to the directory and run `bundle install`
5.  Run `npm install` to install the necessary "npm" dependencies
6.  Then run `bower install` to install the front-end dependencies
7.  **You are ready to rock!!!** :)

### Issues faced with:
- [Error: EACCES, unlink '/usr/local/lib/node_modules/grunt-cli/.npmignore'](https://github.com/stefanpenner/ember-app-kit/issues/69)
- [Could not find gem 'jekyll (>= 0) ruby' in any of the gem sources listed in your Gemfile or available on this machine.](https://stackoverflow.com/questions/13961007/bundler-cannot-find-a-version-of-a-gem-but-gem-install-with-the-same-game-works)

### Deploy

```
grunt deploy
```
