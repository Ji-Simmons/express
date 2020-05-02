const express = require('express');
const port = 3000;

const app = express();

//app.use(express.static('public'));
app.set('view engine', 'ejs');

// create a route for the landing page
app.get('/', (req, res, next) => {
    res.render('pages/landing', {
        color: 'red',
        title: 'Welcome',
        users,
        element: '*For Internal Use Only*',
    });
  });

// create a route for the index page
app.get('/index', (req, res, next) => {
    res.render('pages/index', {
        color: 'red',
        title: 'User List',
        users,
        element: 'Some text',
    });
});

// create a route for the profile page
app.get('/profile', (req, res, next) => {
    res.render('pages/profile', {
      color: 'red',
      title: 'Individual Profile',
      users,
      element: '*Confidential*',
    });
  });

/*  This route is to a non-functioning search results page. Left here to demonstrate ability to build routes, as is part of the assignment.
// create a route for the notfound page
app.get('/notfound', (req, res, next) => {
  res.render('pages/notfound', {
    color: 'red',
    title: 'No result',
    users,
    element: '*Confidential*',
  });
}); */

// basic search code for form
app.get('/search/:name', (req, res, next) => {
  res.json(users.filter((user) => {
      // return true if the search name matches even PART
      // of the user name
      return user.name.indexOf(req.params.name) !== -1;
  }))
});

const profileLookup = (_id) => {
    /* 
        This function should return an array of matching users
        Hopefully that array only has 1 element which is THE
        matching user. So the result should look like:
        [{
            name: 'Brian Murdock',
            email: 'brian@helio.com',
            id: 312,
        }]
    */
    const id = parseInt(_id);
    return users.filter((user) => {
        return user.id === id;
    });
};

app.get('/profile/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    let user = profileLookup(id);
    if (user.length === 0) {
        console.log('user not found..');
        res.render('pages/notfound');
        return;
    }
    user = user[0];

    console.log('found user: ', user);
    res.render('pages/profile', {
        title: `Profile > ${user.name}`,
        user,
    });
});

const users = [{
    name: "Olly Hanway",
    email: "ohanway0@google.pl",
    id: 1,
    gender: "Male"
  }, {
    name: "Bartlet Lotze",
    email: "blotze1@newyorker.com",
    id: 2,
    gender: "Male",
  }, {
    name: "Gael Braun",
    email: "gbraun2@shop-pro.jp",
    id: 3,
    gender: "Male",
  }, {
    name: "Muffin Duding",
    email: "mduding3@amazon.com",
    id: 4,
    gender: "Female",
  }, {
    name: "Rici Hamblett",
    email: "rhamblett4@bloglines.com",
    id: 5,
    gender: "Female",
  }, {
    name: "Nicolette Besset",
    email: "nbesset5@ovh.net",
    id: 6,
    gender: "Female",
  }, {
    name: "Jamey Skyner",
    email: "jskyner6@umich.edu",
    id: 7,
    gender: "Male",
  }, {
    name: "Giorgi Jarrelt",
    email: "gjarrelt7@buzzfeed.com",
    id: 8,
    gender: "Male",
  }, {
    name: "Ash Foyster",
    email: "afoyster8@tiny.cc",
    id: 9,
    gender: "Male",
  }, {
    name: "Danika Faircliff",
    email: "dfaircliff9@uiuc.edu",
    id: 10,
    gender: "Female",
  }, {
    name: "Vlad Niesegen",
    email: "vniesegena@bing.com",
    id: 11,
    gender: "Male",
  }, {
    name: "Phil Ortsmann",
    email: "portsmannb@eepurl.com",
    id: 12,
    gender: "Male",
  }, {
    name: "Marrilee Wallicker",
    email: "mwallickerc@google.nl",
    id: 13,
    gender: "Female",
  }, {
    name: "Kelli Cowins",
    email: "kcowinsd@un.org",
    id: 14,
    gender: "Female",
  }, {
    name: "Lynsey Antczak",
    email: "lantczake@narod.ru",
    id: 15,
    gender: "Female",
  }, {
    name: "Gregoire Bracken",
    email: "gbrackenf@desdev.cn",
    id: 16,
    gender: "Male",
  }, {
    name: "Nyssa Thebeaud",
    email: "nthebeaudg@yahoo.co.jp",
    id: 17,
    gender: "Female",
  }, {
    name: "Adelheid Hrachovec",
    email: "ahrachovech@bandcamp.com",
    id: 18,
    gender: "Female",
  }, {
    name: "Devin Babin",
    email: "dbabini@imageshack.us",
    id: 19,
    gender: "Male",
  }, {
    name: "Cynthie Abrahart",
    email: "cabrahartj@dell.com",
    id: 20,
    gender: "Female",
  }]
  app.use(middle); 
		function middle(req, res, next) {
			console.log('Server has received a request. . . ');
			next();
			};

  
  app.listen(port, (err) => {
    if (err) {
      console.log('Error launching server: ', err);
    }
    console.log(`Application is listening on port ${port}...`);
  });