# TCDB

This is a simple part disposition tracker using node, express, and sequelize.  It is hosted on heroku at [https://tc-db.herokuapp.com/](https://tc-db.herokuapp.com/). 

## Functionality

* A user can add a badge ID, Part Number, and Disposition and submit the info to the database.
* A user can view the Part Number, Disposition, and who it was Dispositioned By
* Alerts provide feedback to the user if errors occur

## The Database

* there are two tables, one for the user and badge id and one for the part number and disposition with the badge id as a foreign key relationship to the user table
* users are pre-seeded into the database to demonstrate functionality.  Below are the available users.

```
  {
    first_name: 'Luke',
    last_name: 'Teal',
    badge_id: 123456
  },
  {
    first_name: 'Tim',
    last_name: 'Blandsworth',
    badge_id: 223456
  },
  {
    first_name: 'Viola',
    last_name: 'Swamp',
    badge_id: 323456
  },
  {
    first_name: 'Amy',
    last_name: 'Pond',
    badge_id: 423456
  },
```