import {expect} from 'chai';
import sinon from 'sinon';
import * as db from '../database';
import {executeSimpleQuery} from "../query";

describe('DB Query', function() {
  let stub: sinon.SinonStub;

  beforeEach(function () {
    stub = sinon.stub(db, 'connect')
  })

  afterEach(function () {
    stub.restore();
  })
  it('Returns error if query could not be executed', async function () {
    let errorCode = 'ETIMEDOUT';
    stub.returns({
      query: (query: string, params: Array<any>) => {
        throw {
          code: errorCode,
          errno: undefined,
          sqlState: undefined,
          sqlMessage: undefined
        }
      },
      end: () => {}
    });
    let queryResult = await executeSimpleQuery('SELECT * FROM anime', []);
    expect(queryResult.data.code).to.equal(errorCode);
    expect(queryResult.error).to.be.true;
  });

  it('Returns success if query was executed succesfully', async function () {
    let data = 'some data';
    stub.returns({
      query: (query: string, params: Array<any>) => {
        return [data, 'columnDefinitions']
      },
      end: () => {}
    });
    let queryResult = await executeSimpleQuery('SELECT * FROM anime', []);
    expect(queryResult.error).to.be.false;
    expect(queryResult.data).to.equal(data);
  });

});