import { obtenerAnime } from '../controllers/anime.controller';
const expressRequestMock = require('express-request-mock');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
import * as db from '../database';

describe('GET /getAnime/:id', function() {
  it('Returns 400 if not a provided a number as id', async function () {
    const options = {
      params: {
        id: 'hola'
      }
    }
    let stub = sinon.stub(db, 'executeSimpleQuery').returns([]);
    const { res } = await expressRequestMock(obtenerAnime, options)

    chai.expect(res.statusCode).to.equal(400);

    stub.restore();

  });

  it('Returns 404 if anime does not exist', async function () {
    const options = {
      params: {
        id: '1'
      }
    }
    let stub = sinon.stub(db, 'executeSimpleQuery').returns({data: [], error: false});
    const { res } = await expressRequestMock(obtenerAnime, options)
    expect(res.statusCode).to.equal(404);
    stub.restore();
  });

  it('Returns 500 if error exist', async function () {
    const options = {
      params: {
        id: '1'
      }
    }
    let stub = sinon.stub(db, 'executeSimpleQuery').returns({data: [], error: true});
    const { res } = await expressRequestMock(obtenerAnime, options)
    expect(res.statusCode).to.equal(500);
    stub.restore();
  });

  it('Returns 200 if everything is ok', async function () {
    const options = {
      params: {
        id: '1'
      }
    }
    let stub = sinon.stub(db, 'executeSimpleQuery').returns({data: [{id: 1, nombre: 'Death Note', episodios: 54}], error: false});
    const { res } = await expressRequestMock(obtenerAnime, options)
    expect(res.statusCode).to.equal(200);
    stub.restore();
  });

});