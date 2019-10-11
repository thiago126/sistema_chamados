'use strict'
const User = use('App/Models/User')

class UserController {

    async signup({request, auth, response}){
        const userData = request.all()

        try{
            const user = await User.create(userData)

            const token = await auth.generate(user)

            return response.json({
                status: 'sucess',
                data: token
            })

        }catch(error){
            return response.status(400).json(({
                status: 'error',
                message: 'There was a problem creating the user, please try again later.'
            }))
        }
    }

    async login ({ request, auth ,response}) {
        try{
            return auth.attempt(request.input('email'), request.input('password'))
        }catch(error){
            return response.status(400).json({
                status: 'error',
                message: 'Erro ao logar'
            })
        }
        
    }
}

module.exports = UserController