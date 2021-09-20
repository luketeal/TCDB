# TCDB

This is a simple part disposition tracker using node, express, and sequelize.  It is hosted on heroku at [https://tc-db.herokuapp.com/](https://tc-db.herokuapp.com/). 

## Functionality

* A user can add a badge ID, Part Number, and Disposition and submit the info to the database.
* A user can view the Part Number, Disposition, and who it was Dispositioned By
* Alerts provide feedback to the user if errors occur

## The Database

* there are two tables, one for the user and badge id and one for the part number and disposition with the badge id as a foreign key relationship to the user table

```
    
|:--------users-------:|                      |:------dispositions------:|       
|   column   |   type  |                      |    column   |    type    |
|:----------:|:-------:|                      |:-----------:|:----------:|
|     id     |   int   |                      |      id     |     int    |
| first_name | varchar |                      | part_number |   varchar  |
|  last_name | varchar |                      | disposition | tinyint(1) |
|  badge_id  |   int   |<one-----to------many>|   badge_id  |     int    |
                        ON DELETE = NO ACTION
                        ON UPDATE = CASCADE
```


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

## Future Development
* split ui up so that is with react based components instead of all on one page with display none attributes
* add functionality to add/update users