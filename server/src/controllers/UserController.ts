import {Request, Response} from 'express';
import knex from '../database/connection';

class UserController {
  async index(request: Request, response: Response) {
    const user = await knex('user').select('*');

    const serialized = user.map(u => {
        return {
            id: u.id,
            client_id: u.client_id,
            username: u.username,
            password: u.password,
        }
    })

    return response.json(serialized);
  }

  async show(request: Request, response: Response){
    const { username } = request.params;

    const user = await knex('user')
        .where('username', username)
        .first();

    if(!user){
        return response.status(400).json({ message: 'Usuário não cadastrado.'});
    }

    return response.json(user);
}
}

export default UserController