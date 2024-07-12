# Tech Blogger

## Description

Tech Blogger is a site for programmers and tech savvy individuals to share information. Users can create an account, write posts and comment on other user's posts.

## Table of contents

- [DESCRIPTION](#description)
- [INSTALLATION](#installation)
- [QUESTIONS](#questions)
- [LINKS](#links)

## Installation

### Create the database
- Using psql, run `psql -U postgres` and then input your password.
- Execute the command `\i db/schema.sql;`

### Setting up the environment
Replace `.env.EXAMPLE` with `.env` and input your postgres information to connect to the database using Sequelize.

Run the npm command `npm install` to install of the dependencies.

### Seeding the database
Run the npm command `npm run seed` to seed the database.

### Starting the server
Run the command `npm start` to start the database.
From that point forth, you can interact with the site on localhost:3001

## Questions

For additional questions contact me through [GitHub](https://github.com/brianTib) or [via email](mailto:bptiburcio@gmail.com)

## Links 

- (GitHub Repo)[https://github.com/BrianTib/teach-blogger]
- (Render Deployment)[]