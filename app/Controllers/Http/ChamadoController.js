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

    async aceitarChamado({request, auth, response}){
        try{
            const chamado = request.all()
            const user = await auth.getUser()

            chamado.user_id = user.id
            chamado.save()

            return response.json({
                status: 'sucess',
                data: chamado
            })

        }catch(error){
            return response.status(400).json({
                status: 'error',
                message: 'There was a problem accept the chamado, please try again later.'
            })
        }
    }

    async fecharChamado({request, response}){
        try{
            const chamado = request.all()
            chamado.save()

            return response.json({
                status: 'sucess',
                data: chamado
            })
        }catch(error){
            return response.status(400).json({
                status:'error',
                message:'There was a problem close the chamado, please try again later.'
            })
        }
    }
}

module.exports = ChamadoController
