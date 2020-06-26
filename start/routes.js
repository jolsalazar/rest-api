'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')


Route.group(() => {


  //Route.resource('books', 'BookController');

  Route.get('/books', 'BookController.index');
  Route.get('/books/:id', 'BookController.show');
  Route.post('/books', 'BookController.store');
  Route.put('/books/:id', 'BookController.update');
  Route.delete('/books/:id', 'BookController.destroy');


  Route.resource('courses', 'CourseController')
  Route.get('/courses/:id/students', 'CourseController.showWithStudents')
  Route.get('/courses/:id/raw', 'CourseController.showWithStudentsRaw')


  //Route.resource('students', 'StudentController')

}).prefix('api/v1');


