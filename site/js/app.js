var app = app || {};

$(function(){
  var books = [
    {title:'Javascript', author:'Douglas',releaseDate:'2009',keywords:'javascript'},
    {title:'Javascript', author:'Douglas',releaseDate:'2009',keywords:'javascript'},
    {title:'Javascript', author:'Douglas',releaseDate:'2009',keywords:'javascript'},
    {title:'Javascript', author:'Douglas',releaseDate:'2009',keywords:'javascript'},
    {title:'Javascript', author:'Douglas',releaseDate:'2009',keywords:'javascript'},
    {title:'Javascript', author:'Douglas',releaseDate:'2009',keywords:'javascript'},
    {title:'Javascript', author:'Douglas',releaseDate:'2009',keywords:'javascript'},
  ];
  new app.LibraryView(books);
})
