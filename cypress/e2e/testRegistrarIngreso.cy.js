const bodyRequestCorrecto = require('./../fixtures/BodyCorrecto.json')
const bodyRequestIncorrecto = require('./../fixtures/BodyIncorrecto.json')

describe('Prueba registrar ingreso con Mountebank', () => {
  it('Cuando se ingresa correctamente los parametros del cuerpo, se espera que retorne un status 200', () => {
    cy.request({
      method:'POST',
      url:'/zer/external/ingreso/crear',
      body:bodyRequestCorrecto,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(
      (response)=>{
        expect(response.status).to.equal(200)
      }
    );
  });
  it('Cuando se ingresa el cuerpo del request sin especificar la placa, se espera que retorne un estatus 400',()=>{
    cy.request({
      method:'POST',
      url:'/zer/external/ingreso/crear',
      body:bodyRequestIncorrecto,
      failOnStatusCode: false,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(
      (response)=>{
        expect(response.status).to.equal(404)
        expect(response.body["mensaje"]).to.equal("El campo placa debe estar dentro de los parametros");
      }
    );
  });
});