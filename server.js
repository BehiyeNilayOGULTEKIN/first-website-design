const express =require('express');
const mongoose=require('mongoose');
const app =express();
const ejs =require('ejs');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// const bodyParser = require('body-parser');
const url = 'mongodb://localhost:4000';
const dbName = 'beyazperde';
const dbUrl= 'mongodb+srv://Admin:1.nilayunutma@mydatabase.ilwyvfv.mongodb.net/beyazperde?retryWrites=true&w=majority';
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
 mongoose.connect(dbUrl,{ useNewUrlParser: true,useUnifiedTopology:true}).then((result)=> console.log("bağlantı kuruldu")).catch((result)=>console.log("bağlantı başarısız"));
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
// const movieSchema = new mongoose.Schema({
//   title: String,
//   posterurl: String,
// });

// const movieSchema2 = new mongoose.Schema({
//   posterurl: String,
//   trailer: String,
//   watch: String,
// });

// const Movie = mongoose.model('Movie', movieSchema);
// const Movie2 = mongoose.model('Movie2', movieSchema2);

// app.use('/public', express.static('public'));

// app.get('/', (req, res) => {
//   Movie.find({}).limit(6)
//     .then(movies => {
//       res.render('page-trailers-index', {
//         moviesList: movies,
//       });
//     })
//     .catch(err => {
//       console.log("Error!");
//     });
// });

// app.get('/recent', (req, res) => {
//   Movie2.find({}).limit(6)
//     .then(recentMovies => {
//       res.render('page-trailers-index', {
//         moviesList2: recentMovies,
//       });
//     })
//     .catch(err => {
//       console.log("Error2!");
//     });
// });

// app.listen(4000, function () {
//   console.log("Server is running");
// });
// const movieSchema = new mongoose.Schema({
//   title: String,
//   posterurl: String,
// });

// const movieSchema2 = new mongoose.Schema({
//   posterurl: String,
//   trailer: String,
//   watch: String,
// });

// const Movie = mongoose.model('Movie', movieSchema);
// const Movie2 = mongoose.model('Movie2', movieSchema2);

// app.use('/public', express.static('public'));
// // app.use(bodyParser.urlencoded({extended: true}));
// app.get('/', (req, res) => {
//   const movies = Movie.find({}).exec();
//   const recentmovies = Movie2.find({}).exec();

//   Promise.all([movies, recentmovies])
//     .then(([movies, recentmovies]) => {
//       res.render("page-traliers-index", {
//         moviesList: movies,
//         moviesList2: recentmovies,
//       });
//       console.log(recentmovies);
//     })
//     .catch(err => {
//       console.log("Error!", err);
//       res.status(500).send("An error occurred");
//     });
// });
// app.get('/page-traliers-index', (req, res) => {

//   res.render('page-traliers-index');
  
//   });
  
// app.get('/page-traliers-link-index', (req, res) => {

//   res.render('page-traliers-link-index');
  
//   });
  
// app.listen(4000, () => {
//   console.log("Server is running");
// });
// app.get('/actors-page', (req, res) => {

//     res.render('actors-page');
    
//     });
// app.get('/page-traliers-link-index', (req, res) => {

//     res.render('page-traliers-link-index');
      
//     });
// app.get('/comments_sec', (req, res) => {

//         res.render('comments_sec');
          
//     });
// app.get('/main_movie_tralier_page', (req, res) => {

//             res.render('main_movie_tralier_page');
              
//     });
// app.get('/renewed-tv-series', (req, res) => {

//       res.render('renewed-tv-series');
        
// });
// app.get('/seasons-eposides', (req, res) => {

//   res.render('seasons-eposides');
    
// });
// app.get('/serie-tralier-index', (req, res) => {

//   res.render('serie-tralier-index');
    
// });
const movieSchema = new mongoose.Schema({
  title: String,
  posterurl: String,
});

const recentmoviesSchema = new mongoose.Schema({
  posterurl: String,
  tralier: String,
  watch: String,
});
const commentsSchema = new mongoose.Schema({
  username:String,
  comment:String,
});
const Movie = mongoose.model('Movie', movieSchema)
module.exports= Movie;
const recentmovie = mongoose.model('recentmovies', recentmoviesSchema);
const commentssec = mongoose.model('comments', commentsSchema);


app.use('/public', express.static('public'));
// app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
  const movies = Movie.find({}).exec();
  const recentmovies = recentmovie.find({}).exec();
  // // const comments = commentssec.find({}).exec();
  Promise.all([movies, recentmovies])
    .then(([movies, recentmovies]) => {
      res.render("page-traliers-index", {
        moviesList: movies,
        moviesList2: recentmovies,
      });
<<<<<<< HEAD
      // res.render("comments_sec", {
      //   commentsList:comments,
      // });
      // console.log(recentmovies);
      // console.log(comments);

=======
      console.log(recentmovies);
      console.log(movies);
      //controlling the datas 
>>>>>>> ebdb2d489047d2d2de132ee3df19d4f968da5c27
    })
    .catch(err => {
      console.log("Error!", err);
      res.status(500).send("An error occurred");
    });
});
app.get('/page-traliers-index', (req, res) => {

  res.render('page-traliers-index');
  
  });
  
app.get('/page-traliers-link-index', (req, res) => {

  res.render('page-traliers-link-index');
  
  });
  
app.listen(4000, () => {
  console.log("Server is running");
});
app.get('/actors-page', (req, res) => {

    res.render('actors-page');
    
    });
// app.get('/comments_sec', (req, res) => {
//   const comments = commentssec.find({}).exec();
//   res.render("comments_sec", {
//     commentsList:comments,
//   });
//           console.log(commentsList);
//     });
// app.get('/comments_sec', (req, res) => {
//   commentssec.find({}).exec((err, comments) => {
//     if (err) {
//       // Handle the error appropriately
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.render("comments_sec", {
//         commentsList: comments,
//       });
//       console.log(comments); // Use `comments` instead of `commentsList`
//     }
//   });
// });
app.get('/comments_sec', (req, res) => {
  commentssec.find({}).exec()
    .then(comments => {
      res.render("comments_sec", {
        commentsList: comments,
      });
      console.log(comments);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});
app.get('/main_movie_tralier_page', (req, res) => {

            res.render('main_movie_tralier_page');
              
    });
app.get('/renewed-tv-series', (req, res) => {

      res.render('renewed-tv-series');
        
});
app.get('/seasons-eposides', (req, res) => {

  res.render('seasons-eposides');
    
});
app.get('/serie-tralier-index', (req, res) => {

  res.render('serie-tralier-index');
    
});
app.get('/admin_traliers', (req, res) => {

  res.render('admin_traliers');
    
});
