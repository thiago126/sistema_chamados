'use strict'
const Chamado = use  ('App/Models/Chamado')

class ChamadoController {

    async novoChamado ({request, auth, response}){

        try{
            const chamado = request.all()

            const token = await auth.generate(chamado)

            return response.json({
                status: 'sucess',
                data: token
            })

        }catch(error){
            return response.status(400).json(({
                status: 'error',
                message: 'There was a problem creating the chamado, please try again later.'
            
            }))
        }
    }

}

module.exports = ChamadoController
