import { obtenerAnime } from '../controllers/anime.controller';
import  expressRequestMock from 'express-request-mock';
import {expect} from 'chai';
import sinon from 'sinon';
import * as query from '../query';

describe('Obtener descripcion de un anime', function() {
  let stub: sinon.SinonStub;

  beforeEach(function () {
    stub = sinon.stub(query, 'executeSimpleQuery')
  })

  afterEach(function () {
    stub.restore();
  })
  it('Returns 400 if not a provided a number as id', async function () {
    const options = {
      params: {
        id: 'hola'
      }
    }
    stub.returns([]);
    const { res } = await expressRequestMock(obtenerAnime, options)
    expect(res.statusCode).to.equal(400);
  });

  it('Returns 404 if anime does not exist', async function () {
    const options = {
      params: {
        id: '1'
      }
    }
    stub.returns({data: [], error: false});
    const { res } = await expressRequestMock(obtenerAnime, options)
    expect(res.statusCode).to.equal(404);
  });

  it('Returns 500 if error exist', async function () {
    const options = {
      params: {
        id: '1'
      }
    }
    stub.returns({data: [], error: true});
    const { res } = await expressRequestMock(obtenerAnime, options)
    expect(res.statusCode).to.equal(500);
  });

  it('Returns 200 if everything is ok', async function () {
    const options = {
      params: {
        id: '1'
      }
    }
    stub.returns({data: [{id: 1, nombre: 'Death Note', episodios: 54}], error: false});
    const { res } = await expressRequestMock(obtenerAnime, options)
    expect(res.statusCode).to.equal(200);
  });

});