// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1653809701612478', // your App ID
        'clientSecret'  : '2c69291f6d19baf1a0e4e684331c5d7e', // your App Secret
        'callbackURL'   : 'https://express-auth-playground-benobab.c9users.io/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'nP2PhEV6EddhwvasfsyNSSxJ1',
        'consumerSecret'    : 'bcEv5d4uUw9kDrX3NeRsQunKJne1A5ksRqKqns34MSLzMP9Yn9',
        'callbackURL'       : 'https://express-auth-playground-benobab.c9users.io/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '524118398415-5o5h1h269ktd5f4ihqaoqum1o5apulto.apps.googleusercontent.com',
        'clientSecret'  : 'Da8yD2QdX0h7q7COyQi64M1q',
        'callbackURL'   : 'https://express-auth-playground-benobab.c9users.io/auth/google/callback'
    }

};