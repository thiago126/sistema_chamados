'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Chamado = use('App/Models/Chamado')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/signup', 'UserController.signup').prefix( 'api')

Route.post('/login', 'UserController.login').prefix('api')

Route.post('/novoChamado', 'ChamadoController.novoChamado').prefix('api')

Route.get('/listarChamados', async() =>{
  return await Chamado.all()
}).prefix('api')

Route.post('/aceitarChamado','ChamadoController.aceitarChamado').prefix('api')

Route.post('/fecharChamado','ChamadoController.fecharController.fecharChamado').prefix('api')