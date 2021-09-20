const { User } = require('../models');

const userData = [
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
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
