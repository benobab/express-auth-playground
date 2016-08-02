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
    // app.post('/login', do all our passport stuff here);
    
    //====================================================================================================
    //Signup Page ========================================================================================
    //====================================================================================================
    app.get('/signup',function(req,res){
        //Render the page and pass in any flash data if it exists
        res.render('signup.pug',{message:req.flash('signupMessage')}); 
    });
    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    
    //====================================================================================================
    //Profile Page =======================================================================================
    //====================================================================================================
    app.get('/',function(req,res){
        
    });
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    
    //====================================================================================================
    //Logout =============================================================================================
    //====================================================================================================
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