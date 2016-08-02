module.exports = function(app,passport){
    
    //====================================================================================================
    //Home Page ========================================================================================
    //====================================================================================================
    app.get('/',function(req,res){
        res.render('index.pug'); //Load the index.pug file
    });
    
    //====================================================================================================
    //Login Page ========================================================================================
    //====================================================================================================
    app.get('/login',function(req,res){
        //Render the page and pass in any flash data if it exists
        res.render('login.pug',{message:req.flash('loginMessage')});        
    });
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    //====================================================================================================
    //Signup Page ========================================================================================
    //====================================================================================================
    app.get('/signup',function(req,res){
        //Render the page and pass in any flash data if it exists
        res.render('signup.pug',{message:req.flash('signupMessage')}); 
    });
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup',{
        successRedirect:'/profile', // redirect to the secure profile section
        failureRedirect:'/signup', // redirect back to signup page
        failureFlash:true // Allow flash messages
    }));
    
    //==========================================================================
    //Profile Page =============================================================
    //==========================================================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.pug', {
            user : req.user // get the user out of session and pass to template
        });
    });
    
    
    // =========================================================================
    // FACEBOOK ROUTES =========================================================
    // =========================================================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));
    
    //==========================================================================
    //Logout ===================================================================
    //==========================================================================
    app.get('/logout',function(req,res){
        req.logout();
        res.redirect('/');
    });
    
    //====================================================================================================
    //Route middleware to make sure a user is logged in ==================================================
    //====================================================================================================
    function isLoggedIn(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/');
    }
    
}