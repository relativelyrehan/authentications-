const md5 = require("md5");


app.post("/register", function(req, res){
  const newUser = new User({
    email: req.body.username,
    password: md5(req.body.password)
  });
  
  newUser.save();
});


app.post("/login", function(req, res){
  const username = req.body.username;
  const passpword = md5(re.body.password);
  
  User.findOne(
    {email: username}, function(err, findUser){
      if(findUser){
        if(findUser === password){
          res.render("secret");
        }
      }
      
    }
  
  );

});
