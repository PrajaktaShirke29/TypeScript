const express = require('express');
const router = express();
const auth = require('../../controller/authentication')

router.get('/login', function (req, res) {
  auth.getAllUser().then(data => {
    res.json({
      'status': 'success',
      'message': data
    });

  }).catch((err) => {
    res.json({
      'status': 'error',
      'message': 'Something Went wrong',
      'err': err
    })
  })
})

router.post('/login', function (req, res) {
  const body = req.body;
  if (body.email && body.password) {
    auth.verifyUser(body).then(data => {
      req.session = data;
      res.json({
        'status': 'success',
        'message': data
      });

    }).catch((err) => {
      res.json({
        'status': 'error',
        'message': 'Something Went wrong',
        'err': err
      })
    })
  } else {
    res.json({
      'status': 'error',
      'message': 'Enter required field'
    })
  }
});

router.post('/register', function (req, res) {
  const body = req.body;
  if (body.name && body.number && body.email && body.password) {
    auth.registerUser(body).then(data => {
      // console.log("hello");
      if (data.affectedRows) {
        res.json({
          'status': 'success',
          'message': data.affectedRows
        });
      } else {
        if (data.custom) {
          res.json({
            'status': 'success',
            'message': data.custom
          });
        } else {
          res.json({
            'status': 'success',
            'message': 'Unable to register'
          });
        }
      }
    }).catch((err) => {
      res.json({
        'status': 'error',
        'message': 'Something Went wrong',
        'err': err
      })
    })
  } else {
    res.json({
      'status': 'error',
      'message': 'Enter required field'
    })
  }
});

module.exports = router;