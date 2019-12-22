After trying to build out an app with lots of view updates in rails and javascript it became apparent that it was not
the right tool for the job. Trying again with a MERN stack and this package: https://github.com/Hellenic/react-hexgrid

While ultimately the hope is to produce a working app capable of playing a hex and counter based wargame (e.g Standard
Combat series: https://boardgamegeek.com/wiki/page/Standard_Combat_Series) realistically this will become another
learning experience and to that end this readme will also act as a reference to resources used to build the project.

# Dependencies

In an effort to understand what each package being used in this project actually does links to wiki/documentation and a
brief description of each dependency can be found below. Some packages have a lot going on and have a section further on
to add details.

Body Parser - https://github.com/expressjs/body-parser ... I know literally nothing about this beyond what the title
  implies.

Express - https://expressjs.com/ , this is an essential package that adds things like routing and templates (so you can
  stop writing html) ... I need to learn more about this

Mongoose -

Nodemon - https://nodemon.io/ , this is dev tool that automatically restarts the app server on source code updates

# Project Structure

TBD - basically going to work off of what I find here: https://blog.logrocket.com/mern-stack-a-to-z-part-1/ before
going off on my own.

# NPM Basics

npm init --yes , creates an initial package.json file with all default values (due to the --yes flag)
npm i [space separated package names] , install the packages listed
npm i -D [space separated packages names] , install the packages listed as dev dependencies
npm audit , check for security issues with dependencies
npm audit fix , attempt fixes for identified security issues can also use --force flag though this should be avoided
npm run [script name] , run the command listed under package.json "scripts", if none is found it will do nothing

# React

...

# MongoDB

### OSX Setup

brew services [start/stop/restart] mongodb-community - use homebrew to manage mongodb

### Basic MongoDB Commands

show dbs - show all the databases available
show collections - show all collections (tables) in the current database
show users - show all users for currently connected database

use foo - if db foo exists switch to it otherwise create foo and switch to it

db - this will print the name of the currently connected db
db.foo.find() - show all entires in collection 'foo'
db.dropDatabase() - drop the currently connected database
db.createUser() - creates a user on the database more on this below...
db.getUsers() - seemingly the same as 'show users' command

passwordPrompt() - prompt for password entry, example below in user create/update

### MongoDB User Management

Creating an admin user with access to every database can be down with the below
```
db.createUser(
{	user: "Guru99",
	pwd: "password",

	roles:[{role: "userAdminAnyDatabase" , db:"admin"}]})
```

In my case I accidentally entered myself as "Guru99" (tutorial author's name) and wanted to update it to something I
would recognize in the future.

First I tried the below command, but it did not do what I had expected. Passing 'user' as part of the document causes
everything to blow up though passing pwd and roles as is done below will work fine
```
db.updateUser(
  "Guru99",
  {
    user: "admin",
    pwd: passwordPrompt(),
    roles:[{role: "userAdminAnyDatabase" , db:"admin"}]
  }
)
```

This ended up being the solution to changing the name of the user
```
db.system.users.update({user: "Guru99"}, {$set:{user: "eric"}})
```

```
db.deleteUser()
```

Official definition of getUsers()
```
db.getUsers({
   showCredentials: <Boolean>,
   filter: <document>
})
```

Example of getUsers() with a filter to find the user with name 'mernapp'
```
db.getUsers({showCredentials: false, filter{user: 'mernapp'}})
```

### Localhost MongoDB

...

### Mongoose

...

# Sources

React-Hexgrid Package - https://blog.logrocket.com/mern-stack-a-to-z-part-1/
Getting Started With MERN Stack Tutorial - https://blog.logrocket.com/mern-stack-a-to-z-part-1/
