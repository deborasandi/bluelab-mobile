import {Request, Response} from 'express';
import knex from '../database/connection';

class ClientController {
  async index(request: Request, response: Response) {
    const client = await knex('client').select('*');

    const serialized = client.map(c => {
      return {
          id: c.id,
          name: c.name,
          cpf_cnpj: c.cpf_cnpj,
          tel: c.tel,
          cel: c.cel,
          address: c.address,
          number: c.number,
          compl: c.compl,
          district: c.district,
          city: c.city,
          uf: c.uf,
          cep: c.cep,
          resp_name: c.resp_name,
          resp_cpf: c.resp_cpf,
          resp_cel: c.resp_cel,
          username: c.username,
          password: c.password,
          pricetable_id: c.pricetable_id,

      }
    })
    return response.json(serialized);
  }
}

export default ClientController