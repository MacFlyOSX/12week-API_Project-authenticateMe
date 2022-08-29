'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Venues', [
      {
        groupId: 9,
        address: '3331 PEANUT BLVD',
        city: 'Salt Lake City',
        state: 'UT',
        lat: '40.7547',
        lng: '-111.892622'
      },
      {
        groupId: 8,
        address: '7179 HAZELNUT RD',
        city: 'Montgomery',
        state: 'AL',
        lat: '32.361538',
        lng: '-86.279118'
      },
      {
        groupId: 11,
        address: '9889 HAZELNUT RD',
        city: 'Austin',
        state: 'TX',
        lat: '30.266667',
        lng: '-97.75'
      },
      {
        groupId: 2,
        address: '4777 MACADAMIA CT',
        city: 'Boston',
        state: 'MA',
        lat: '42.2352',
        lng: '-71.0275'
      },
      {
        groupId: 14,
        address: '4166 CASHEW ST',
        city: 'Saint Paul',
        state: 'MN',
        lat: '44.95',
        lng: '-93.094'
      },
      {
        groupId: 6,
        address: '2876 PEANUT BLVD',
        city: 'Santa Fe',
        state: 'NM',
        lat: '35.667231',
        lng: '-105.964575'
      },
      {
        groupId: 13,
        address: '6904 CASHEW ST',
        city: 'Des Moines',
        state: 'IA',
        lat: '41.590939',
        lng: '-93.620866'
      },
      {
        groupId: 2,
        address: '7616 MACADAMIA CT',
        city: 'Topeka',
        state: 'KS',
        lat: '39.04',
        lng: '-95.69'
      },
      {
        groupId: 20,
        address: '2904 MACADAMIA CT',
        city: 'Juneau',
        state: 'AK',
        lat: '58.301935',
        lng: '-134.419740'
      },
      {
        groupId: 18,
        address: '601 CASHEW ST',
        city: 'Nashville',
        state: 'TN',
        lat: '36.165',
        lng: '-86.784'
      },
      {
        groupId: 15,
        address: '9225 ALMOND DR',
        city: 'Salt Lake City',
        state: 'UT',
        lat: '40.7547',
        lng: '-111.892622'
      },
      {
        groupId: 13,
        address: '4657 MACADAMIA CT',
        city: 'Olympia',
        state: 'WA',
        lat: '47.042418',
        lng: '-122.893077'
      },
      {
        groupId: 18,
        address: '7372 WALNUT AVE',
        city: 'Honolulu',
        state: 'HI',
        lat: '21.30895',
        lng: '-157.826182'
      },
      {
        groupId: 16,
        address: '4764 PEANUT BLVD',
        city: 'Atlanta',
        state: 'GA',
        lat: '33.76',
        lng: '-84.39'
      },
      {
        groupId: 21,
        address: '4372 PECAN PLZ',
        city: 'Pierre',
        state: 'SD',
        lat: '44.367966',
        lng: '-100.336378'
      },
      {
        groupId: 18,
        address: '5209 WALNUT AVE',
        city: 'Des Moines',
        state: 'IA',
        lat: '41.590939',
        lng: '-93.620866'
      },
      {
        groupId: 2,
        address: '651 WALNUT AVE',
        city: 'Jefferson City',
        state: 'MO',
        lat: '38.572954',
        lng: '-92.189283'
      },
      {
        groupId: 16,
        address: '8685 WALNUT AVE',
        city: 'Honolulu',
        state: 'HI',
        lat: '21.30895',
        lng: '-157.826182'
      },
      {
        groupId: 7,
        address: '3632 PISTACHIO PKWY',
        city: 'Salem',
        state: 'OR',
        lat: '44.931109',
        lng: '-123.029159'
      },
      {
        groupId: 7,
        address: '8524 WALNUT AVE',
        city: 'Harrisburg',
        state: 'PA',
        lat: '40.269789',
        lng: '-76.875613'
      },
      {
        groupId: 9,
        address: '84 PECAN PLZ',
        city: 'Jefferson City',
        state: 'MO',
        lat: '38.572954',
        lng: '-92.189283'
      },
      {
        groupId: 5,
        address: '3486 PISTACHIO PKWY',
        city: 'Raleigh',
        state: 'NC',
        lat: '35.771',
        lng: '-78.638'
      },
      {
        groupId: 2,
        address: '1726 CASHEW ST',
        city: 'Jackson',
        state: 'MS',
        lat: '32.320',
        lng: '-90.207'
      },
      {
        groupId: 22,
        address: '759 PISTACHIO PKWY',
        city: 'Juneau',
        state: 'AK',
        lat: '58.301935',
        lng: '-134.419740'
      },
      {
        groupId: 10,
        address: '1424 CHESTNUT LN',
        city: 'Sacramento',
        state: 'CA',
        lat: '38.555605',
        lng: '-121.468926'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Venues');
  }
};
