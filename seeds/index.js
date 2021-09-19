const seedUsers = require('./userSeeds');
const seedDispositions = require('./dispositionSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedDispositions();
  console.log('\n----- DISPOSITIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
