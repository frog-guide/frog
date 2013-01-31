/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"

var data = {
  "users": [
    {
      "username": "cironunes",
      "password": "123123"
    },
    {
      "username": "giovanni",
      "password": "1231234"
    }
  ],

  "elements": [
    {
        "name": "Texto normal",
        "color": "c60f54",
        "background": "cc3277",
        "size": "12px",
        "lineHeight": "2px",
        "decoration": "none",
        "style": "normal"
    },
    {
        "name": "Link normal",
        "color": "c60f13",
        "background": "gg9977",
        "size": "12px",
        "lineHeight": "2px",
        "decoration": "none",
        "style": "normal"
    },
    {
        "name": "Botão primário",
        "color": "c60f48",
        "background": "cc9347",
        "size": "12px",
        "lineHeight": "2px",
        "decoration": "none",
        "style": "normal"
    },
    {
        "name": "Botão secundário",
        "color": "c60f18",
        "background": "cc1257",
        "size": "12px",
        "lineHeight": "2px",
        "decoration": "none",
        "style": "normal"
    },
    {
        "name": "teste",
        "color": "cc5547",
        "background": "cc1257",
        "size": "25px",
        "lineHeight": "2px",
        "decoration": "none",
        "style": "normal"
    }
  ]
};

// GET

exports.elements = function (req, res) {
    var elements = [];
    data.elements.forEach(function(element, i) {
        elements.push({
            id: i,
            name: element.name,
            color: element.color,
            background: element.background,
            size: element.size,
            lineHeight: element.lineHeight,
            decoration: element.decoration,
            style: element.style
        })
    });

    res.json({
        elements: elements
    });
};

// // GET

// exports.posts = function (req, res) {
//   var posts = [];
//   data.posts.forEach(function (post, i) {
//     posts.push({
//       id: i,
//       title: post.title,
//       text: post.text.substr(0, 50) + '...'
//     });
//   });
//   res.json({
//     posts: posts
//   });
// };

// exports.post = function (req, res) {
//   var id = req.params.id;
//   if (id >= 0 && id < data.posts.length) {
//     res.json({
//       post: data.posts[id]
//     });
//   } else {
//     res.json(false);
//   }
// };

// // POST

// exports.addPost = function (req, res) {
//   data.posts.push(req.body);
//   res.json(req.body);
// };

// // PUT

// exports.editPost = function (req, res) {
//   var id = req.params.id;

//   if (id >= 0 && id < data.posts.length) {
//     data.posts[id] = req.body;
//     res.json(true);
//   } else {
//     res.json(false);
//   }
// };

// // DELETE

// exports.deletePost = function (req, res) {
//   var id = req.params.id;

//   if (id >= 0 && id < data.posts.length) {
//     data.posts.splice(id, 1);
//     res.json(true);
//   } else {
//     res.json(false);
//   }
// };