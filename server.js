const express =require('express');
const mongoose=require('mongoose');
const app =express();
const ejs =require('ejs');

app.set('view engine','ejs');
 mongoose.connect('mongodb+srv://Admin:1.nilayunutma@mydatabase.ilwyvfv.mongodb.net/beyazperde?retryWrites=true&w=majority');
//  const movieSchema={
//     title: String,
//     posterurl:String,
//  }
//  const Movie=mongoose.model('Movie',movieSchema);
//  app.get('/',(req,res)=>{
//      Movie.find({},function(err,movies){
//          res.render('index',{
//              moviesList:movies
//          })
//      })
//    //   Movie.find({})
//    // .exec((err, results) => {
//    //   if (err) {
//    //     console.log("hata alindi.");
//    //   } else {
//    //       res.render('index',{
//    //           moviesList:movies
//    //       })
//    //   }
//    // });
// // Movie.find({})
// //   .then(results => {
// //     res.render('index',{
// //         moviesList:movies
// //     })
// //   })
// //   .catch(err => {
// //     console.log("hata alindi")
// //   });
//  })
//  app.listen(4000,function() {
//     console.log("server is running");
//  })
const movieSchema = {
   title: String,
   posterurl: String,
 };
 //Defining the variables
 const Movie = mongoose.model('Movie', movieSchema);
 //calling mongodb 
 app.get('/', (req, res) => {
   Movie.find({}).limit(6)
     .then(movies => {
       res.render('page-traliers-index', {
         moviesList: movies,
       });
     })
     .catch(err => {
      console.log("Error!");
     });
 });
 app.use('/public', express.static('public'));
 app.listen(4000, function () {
   console.log("server is running");
 });
 //run the server in localhost-4000