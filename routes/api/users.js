const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const auth = require('../auth')
const User = require('../../models/User')

router.get('/user', auth.required, function(req, res, next){
    User.findById(req.auth.id).then(function(user){
        if(!user){ return res.sendStatus(401); }

        return res.json({user: user.toAuthJSON()});
    }).catch(next);
});

router.post('/login', function(req, res, next){
    if(!req.body.email){
        return res.status(422).json({errors: {email: "can't be blank"}});
    }

    if(!req.body.password){
        return res.status(422).json({errors: {password: "can't be blank"}});
    }

    passport.authenticate('local', {session: false}, function(err, user, info){
        if(err){ return next(err); }

        if(user){
            user.token = user.generateJWT();
            return res.json({user: user.toAuthJSON()});
        } else {
            return res.status(422).json(info);
        }
    })(req, res, next);
});

module.exports = router;