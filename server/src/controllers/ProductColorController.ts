import {Request, Response} from 'express';
import knex from '../database/connection';

class ProductColorController {
  async index(request: Request, response: Response) {
    const productColor = await knex('productcolor').select('*');

    const serialized = productColor.map(p => {
        return {
            id: p.id,
            name: p.name,
        }
    })

    return response.json(serialized);
  }
}

export default ProductColorController