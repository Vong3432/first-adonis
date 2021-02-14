import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
  public async handle ({ session, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL    
    if (!session.userId) {
      console.log('Unauthorized')
      return response.status(401).send('Unauthorized')
    }    

    console.log('Authorized')

    await next()
  }
}
