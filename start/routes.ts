/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  
  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})

// Route.on('/').render('welcome')

Route.get('/', async ({ view }) => {
  // 1. return 'Home page'
  // 2. return {
  //   id: 1,
  //   username: 'vong',
  //   email: 'vong@gmail.com'
  // }
  // 3. return view.render()

  return view.render('welcome')
})

Route.get('users', 'UsersController.index');

Route.group(() => {
  
  // Display
  Route.get('/', 'PostsController.index');

  Route.group(() => {
    Route
      .get('/new', 'PostsController.new')      

    // Method 
    Route
      .post('/', 'PostsController.save')      
  })
    .prefix('/create')
    .middleware('auth')

})
  .prefix('/posts')