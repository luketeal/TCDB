const { Disposition } = require('../models');

const dispositionData = [
  {
    part_number: '12sdfs5',
    disposition: true,
    badge_id: 123456
  },
  {
    part_number: 'T65dsf',
    disposition: false,
    badge_id: 223456
  },
  {
    part_number: 'xfdgdf5',
    disposition: true,
    badge_id: 323456
  },
  {
    part_number: 'hgfh555',
    disposition: true,
    badge_id: 423456
  },
  {
    part_number: 'fsdgdf',
    disposition: true,
    badge_id: 423456
  },
  {
    part_number: 'hfgh55df',
    disposition: true,
    badge_id: 223456
  },
];

const seedDispositions = () => Disposition.bulkCreate(dispositionData);

module.exports = seedDispositions;
