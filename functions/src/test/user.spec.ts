import { crearUsuario } from '../controllers/usuario.controller';
import  expressRequestMock from 'express-request-mock';
import {expect} from 'chai';
import sinon from 'sinon';
import * as query from '../query';
import {Usuario} from "../interface/Usuario";

describe('Crear Usuario', function() {
  let userCreatedResponse: any;
  let newUser: Usuario;
  let options: any;

  let stub: sinon.SinonStub;

  before(function () {
    userCreatedResponse = {
      data: {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 14,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      },
      error: false
    };
    newUser = {
      nombre: 'Juan Perez',
      username: 'juanperez',
      password: 'password',
      correo: 'juan@gmail.com',
      fechaNacimiento: new Date()
    };
    options = {
      body: newUser
    };
  })

  beforeEach(function () {
    stub = sinon.stub(query, 'executeSimpleQuery');
    stub.withArgs('INSERT INTO usuario SET ? ', [newUser]).returns(userCreatedResponse);
  })

  afterEach(function () {
    stub.restore();
  })

  it('Returns 409 if username already registered', async function () {
    stub.withArgs('SELECT username FROM usuario WHERE username = ? ', [newUser.username]).returns({data: [newUser.username], error: false})

    const { res } = await expressRequestMock(crearUsuario, options)

    expect(res.statusCode).to.equal(409);
  });

  it('Returns 200 if username created', async function () {
    stub.withArgs('SELECT username FROM usuario WHERE username = ? ', [newUser.username]).returns({data: [], error: false})

    const { res } = await expressRequestMock(crearUsuario, options)

    expect(res.statusCode).to.equal(200);

  });

});