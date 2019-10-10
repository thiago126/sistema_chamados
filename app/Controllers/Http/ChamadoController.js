'use strict'
const Chamado = use  ('App/Models/Chamado')

class ChamadoController {

    async novoChamado ({request, auth, response}){

        try{
            const data = request.all()
            data.active = 1
            const chamado = await Chamado.create(data)

            return response.json({
                status: 'sucess',
                data: chamado
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
            await chamado.save()

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
            chamado.active = 0;
            await chamado.save()

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
