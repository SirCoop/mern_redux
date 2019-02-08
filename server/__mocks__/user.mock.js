import User from '../models/user';

export default function () {
  User.count().exec((err, count) => {
    if (err) {
      console.log('MERN Scaffold DB: Error getting mock user count: ');
      console.log(error);
    }
    if (count > 0) {
      console.log(`MERN Scaffold DB: ${count} mock users exist.`);
      return;
    }

    const user1 = new User(
      { 
        created: new Date(),
        email: 'cooper.garym@gmail.com',
        firstName: 'Gary',
        lastName: 'Cooper',
        // passwordHash: '',
        // tokenSeed: '',
        username: 'sir_coop',
      }
    );

    const user2 = new User(
      { 
        created: new Date(),
        email: 'vtfanmike@gmail.com',
        firstName: 'Michael',
        lastName: 'Bloom',
        // passwordHash: '',
        // tokenSeed: '',
        username: 'date_mike',
      }
    );

    const users = [
      user1,
      user2
    ];

    User.create(users, (error) => {
      if (!error) {
        console.log(`MERN Scaffold DB: ${users.length} mock users created.`);
      } else {
        console.log('MERN Scaffold DB: Error creating mock users: ');
        console.log(error);
      }
    });
  });
}
