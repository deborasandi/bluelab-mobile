import {Request, Response} from 'express';
import knex from '../database/connection';

class ClientController {
  async index(request: Request, response: Response) {
    const client = await knex('client').select('*');

    const serializedClient = client.map(c => {
        return {
            id: c.id,
            name: c.name,
        }
    })

    return response.json(serializedClient);
  }
}

export default ClientController