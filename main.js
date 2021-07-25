/*
In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

*/

// Parent class
class Media {                                   
    constructor(title) {
      this._title = title;                           
      this._isCheckedOut = false;
      this._ratings = [];
   }
  
  get title() {                         //Methods in classes do not have any separators between them
      return this._title;
  }
  
  get isCheckedOut() {
      return this._isCheckedOut;
  }
  
    get ratings() {
      return this._ratings;
  }
  
  set isCheckedOut(value) {
      this._isCheckedOut=value;
  }
  
  toggleCheckOutStatus() {
      if (this.isCheckedOut === false) {
  
          return this.isCheckedOut = true;
  
      }else if (this.isCheckedOut === true) {
  
           return this.isCheckedOut = false;
      }
  }
  
  getAverageRating(){
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthRatings = this.ratings.length;
      return ratingsSum/lengthRatings;
  }
  
  addRating(rate){
      this.ratings.push(rate);
  }
  }
  
  // Child class
  class Book extends Media{
    constructor (title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  };
  
  // Child class
  class Movie extends Media{
    constructor (title,director,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director = director;
    }
    get runTime(){
      return this._runTime;
    }
  };
  
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
  
  console.log(historyOfEverything);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut)
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie ('Speed','Jan de Bont',116);
  console.log(speed);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  