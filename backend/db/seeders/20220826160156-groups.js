'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Groups', [
      {
        organizerId: 3,
        name: 'One Love',
        about: "Religion. What else can we say about it? Let's get together and chat about it.",
        type: 'In person',
        private: false,
        city: 'Harrisburg',
        state: 'PA'
      },
      {
        organizerId: 1,
        name: 'Masterminds',
        about: "Want to discover a new hobby meetup? Here comes this new weekly board gaming event that you can join! We would like to form a group of board game enthusiasts who love playing games. We decided to meet every week to kill some time or to just RELAX!! Whether you're new to board gaming or you are a proficient gamer, all are welcome to join :)",
        type: 'In person',
        private: true,
        city: 'Raleigh',
        state: 'NC'
      },
      {
        organizerId: 2,
        name: 'Hike and Chat',
        about: 'Hike and Chat is a friendly community of enthusiasts who enjoy outdoor activities, appreciate nature, and have fun together. The goal is to be active, fit, and maintain a healthy lifestyle. Activities include hiking, biking, camping, kayaking, golfing, etc.',
        type: 'In person',
        private: false,
        city: 'Olympia',
        state: 'WA'
      },
      {
        organizerId: 1,
        name: 'One Love',
        about: "Religion. What else can we say about it? Let's get together and chat about it.",
        type: 'In person',
        private: false,
        city: 'Salt Lake City',
        state: 'UT'
      },
      {
        organizerId: 2,
        name: 'F.O.A.M.',
        about: 'This is Friends Of All Music (F.O.A.M.)\n' +
          '\n' +
          'The goal of F.O.A.M. is to bring music lovers together so that we can spend time with like-minded people and create lasting friendships in the process.',
        type: 'Online',
        private: true,
        city: 'Lincoln',
        state: 'NE'
      },
      {
        organizerId: 1,
        name: 'Coffee and Conversation',
        about: "I thought meeting over coffee / tea would be a simple way to make new friends. Each month, we'll host an event at a coffee shop in the city and have a conversation over an interesting topic. Everyone will have an opportunity to share their thoughts and contribute to the discussion. Occasionally there will be other types of events - brunches, walks and museums posted too.",
        type: 'In person',
        private: false,
        city: 'Santa Fe',
        state: 'NM'
      },
      {
        organizerId: 3,
        name: 'Coffee and Conversation',
        about: "I thought meeting over coffee / tea would be a simple way to make new friends. Each month, we'll host an event at a coffee shop in the city and have a conversation over an interesting topic. Everyone will have an opportunity to share their thoughts and contribute to the discussion. Occasionally there will be other types of events - brunches, walks and museums posted too.",
        type: 'In person',
        private: false,
        city: 'Montgomery',
        state: 'AL'
      },
      {
        organizerId: 2,
        name: 'No PAIN No GAIN',
        about: 'Calling all ladies and gentlemen who are looking to develop more strength, agility and endurance.\n' +
          'Join us for outdoor classes where you will dare\n' +
          'your mind and body to diverse fitness challenges.',
        type: 'In person',
        private: false,
        city: 'Saint Paul',
        state: 'MN'
      },
      {
        organizerId: 1,
        name: 'F.O.A.M.',
        about: 'This is Friends Of All Music (F.O.A.M.)\n' +
          '\n' +
          'The goal of F.O.A.M. is to bring music lovers together so that we can spend time with like-minded people and create lasting friendships in the process.',
        type: 'Online',
        private: true,
        city: 'Providence',
        state: 'RI'
      },
      {
        organizerId: 2,
        name: 'F.O.A.M.',
        about: 'This is Friends Of All Music (F.O.A.M.)\n' +
          '\n' +
          'The goal of F.O.A.M. is to bring music lovers together so that we can spend time with like-minded people and create lasting friendships in the process.',
        type: 'Online',
        private: true,
        city: 'Montgomery',
        state: 'AL'
      },
      {
        organizerId: 1,
        name: 'Hike and Chat',
        about: 'Hike and Chat is a friendly community of enthusiasts who enjoy outdoor activities, appreciate nature, and have fun together. The goal is to be active, fit, and maintain a healthy lifestyle. Activities include hiking, biking, camping, kayaking, golfing, etc.',
        type: 'In person',
        private: false,
        city: 'Lansing',
        state: 'MI'
      },
      {
        organizerId: 3,
        name: 'Masterminds',
        about: "Want to discover a new hobby meetup? Here comes this new weekly board gaming event that you can join! We would like to form a group of board game enthusiasts who love playing games. We decided to meet every week to kill some time or to just RELAX!! Whether you're new to board gaming or you are a proficient gamer, all are welcome to join :)",
        type: 'In person',
        private: false,
        city: 'Carson City',
        state: 'NV'
      },
      {
        organizerId: 3,
        name: 'Tech Overflow',
        about: "We are a community of developers prepping for coding interviews, participating in hackathons, building portfolio projects, and attending software engineering panels TOGETHER. No coder is an island, and you don't have to be one either.\n" +
          '\n' +
          "In the past we've had App Academy, Codesmith, Fullstack Academy, Grace Hopper, Flatiron, New York Code + Design, General Assembly++ grads sit alongside our self-taught programmers and computer science majors to hack at projects, crack algos, and speak to software engineers from companies like Coinbase and Bloomberg.",
        type: 'Online',
        private: true,
        city: 'Phoenix',
        state: 'AZ'
      },
      {
        organizerId: 1,
        name: 'Tech Overflow',
        about: "We are a community of developers prepping for coding interviews, participating in hackathons, building portfolio projects, and attending software engineering panels TOGETHER. No coder is an island, and you don't have to be one either.\n" +
          '\n' +
          "In the past we've had App Academy, Codesmith, Fullstack Academy, Grace Hopper, Flatiron, New York Code + Design, General Assembly++ grads sit alongside our self-taught programmers and computer science majors to hack at projects, crack algos, and speak to software engineers from companies like Coinbase and Bloomberg.",
        type: 'Online',
        private: true,
        city: 'Juneau',
        state: 'AK'
      },
      {
        organizerId: 2,
        name: 'Masterminds',
        about: "Want to discover a new hobby meetup? Here comes this new weekly board gaming event that you can join! We would like to form a group of board game enthusiasts who love playing games. We decided to meet every week to kill some time or to just RELAX!! Whether you're new to board gaming or you are a proficient gamer, all are welcome to join :)",
        type: 'In person',
        private: false,
        city: 'Cheyenne',
        state: 'WY'
      },
      {
        organizerId: 3,
        name: 'No PAIN No GAIN',
        about: 'Calling all ladies and gentlemen who are looking to develop more strength, agility and endurance.\n' +
          'Join us for outdoor classes where you will dare\n' +
          'your mind and body to diverse fitness challenges.',
        type: 'In person',
        private: false,
        city: 'Harrisburg',
        state: 'PA'
      },
      {
        organizerId: 2,
        name: 'Coffee and Conversation',
        about: "I thought meeting over coffee / tea would be a simple way to make new friends. Each month, we'll host an event at a coffee shop in the city and have a conversation over an interesting topic. Everyone will have an opportunity to share their thoughts and contribute to the discussion. Occasionally there will be other types of events - brunches, walks and museums posted too.",
        type: 'In person',
        private: true,
        city: 'Harrisburg',
        state: 'PA'
      },
      {
        organizerId: 1,
        name: 'Tech Overflow',
        about: "We are a community of developers prepping for coding interviews, participating in hackathons, building portfolio projects, and attending software engineering panels TOGETHER. No coder is an island, and you don't have to be one either.\n" +
          '\n' +
          "In the past we've had App Academy, Codesmith, Fullstack Academy, Grace Hopper, Flatiron, New York Code + Design, General Assembly++ grads sit alongside our self-taught programmers and computer science majors to hack at projects, crack algos, and speak to software engineers from companies like Coinbase and Bloomberg.",
        type: 'Online',
        private: true,
        city: 'Dover',
        state: 'DE'
      },
      {
        organizerId: 2,
        name: 'Tech Overflow',
        about: "We are a community of developers prepping for coding interviews, participating in hackathons, building portfolio projects, and attending software engineering panels TOGETHER. No coder is an island, and you don't have to be one either.\n" +
          '\n' +
          "In the past we've had App Academy, Codesmith, Fullstack Academy, Grace Hopper, Flatiron, New York Code + Design, General Assembly++ grads sit alongside our self-taught programmers and computer science majors to hack at projects, crack algos, and speak to software engineers from companies like Coinbase and Bloomberg.",
        type: 'Online',
        private: true,
        city: 'Oklahoma City',
        state: 'OK'
      },
      {
        organizerId: 3,
        name: 'F.O.A.M.',
        about: 'This is Friends Of All Music (F.O.A.M.)\n' +
          '\n' +
          'The goal of F.O.A.M. is to bring music lovers together so that we can spend time with like-minded people and create lasting friendships in the process.',
        type: 'Online',
        private: true,
        city: 'Salt Lake City',
        state: 'UT'
      },
      {
        organizerId: 1,
        name: 'Tech Overflow',
        about: "We are a community of developers prepping for coding interviews, participating in hackathons, building portfolio projects, and attending software engineering panels TOGETHER. No coder is an island, and you don't have to be one either.\n" +
          '\n' +
          "In the past we've had App Academy, Codesmith, Fullstack Academy, Grace Hopper, Flatiron, New York Code + Design, General Assembly++ grads sit alongside our self-taught programmers and computer science majors to hack at projects, crack algos, and speak to software engineers from companies like Coinbase and Bloomberg.",
        type: 'Online',
        private: true,
        city: 'Oklahoma City',
        state: 'OK'
      },
      {
        organizerId: 1,
        name: 'No PAIN No GAIN',
        about: 'Calling all ladies and gentlemen who are looking to develop more strength, agility and endurance.\n' +
          'Join us for outdoor classes where you will dare\n' +
          'your mind and body to diverse fitness challenges.',
        type: 'In person',
        private: false,
        city: 'Olympia',
        state: 'WA'
      },
      {
        organizerId: 2,
        name: 'Tipsy Painters',
        about: 'Tipsy Painters is a traveling painting party that is hosted out-of-doors and indoors at various venue locations. Our indoor venues include bars, lounges, casual restaurants as well as private homes and corporate offices. Our outdoor painting takes place in parks during the spring, summer and fall.\n' +
          '\n' +
          'Our class is wonderful for all ages and all levels- beginners through advanced! Attendees learn the basics of painting ~ mixing, shading and blending all the while enjoying a social experience. As they work, our students can enjoy a beverage and some snacks.',
        type: 'In person',
        private: true,
        city: 'Saint Paul',
        state: 'MN'
      },
      {
        organizerId: 2,
        name: 'Tech Overflow',
        about: "We are a community of developers prepping for coding interviews, participating in hackathons, building portfolio projects, and attending software engineering panels TOGETHER. No coder is an island, and you don't have to be one either.\n" +
          '\n' +
          "In the past we've had App Academy, Codesmith, Fullstack Academy, Grace Hopper, Flatiron, New York Code + Design, General Assembly++ grads sit alongside our self-taught programmers and computer science majors to hack at projects, crack algos, and speak to software engineers from companies like Coinbase and Bloomberg.",
        type: 'Online',
        private: false,
        city: 'Charleston',
        state: 'WV'
      },
      {
        organizerId: 1,
        name: 'Masterminds',
        about: "Want to discover a new hobby meetup? Here comes this new weekly board gaming event that you can join! We would like to form a group of board game enthusiasts who love playing games. We decided to meet every week to kill some time or to just RELAX!! Whether you're new to board gaming or you are a proficient gamer, all are welcome to join :)",
        type: 'In person',
        private: true,
        city: 'Boston',
        state: 'MA'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Groups');
  }
};
