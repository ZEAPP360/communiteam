const db = require('../config/connection');
const { User, Community } = require('../models');
//const Community = require('../models/Community');
const userSeeds = require('./userSeeds.json');
const communitySeeds = require('./communitySeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});

    await Community.deleteMany({});

    await User.create(userSeeds);

    await Community.create(communitySeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
