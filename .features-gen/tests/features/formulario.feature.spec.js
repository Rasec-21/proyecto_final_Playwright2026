// Generated from: tests\features\formulario.feature
import { test } from "../../../tests/fixtures/fixture.ts";

test.describe('Registro de formulario Novus Technology', () => {

  test.describe('Completar los datos en el formulario correctamente', () => {

    test('Example #1', { tag: ['@declarativo'] }, async ({ Given, When, And, formularioPage, seleccionarButtonPage, seleccionarLabelPage, seleccionarOpcionPage }) => { 
      await Given('Accedo a la web Novus Technology', null, { formularioPage }); 
      await And('Accedo al formulario de registro desde el menú Laboratorio', null, { seleccionarButtonPage }); 
      await When('Digito mis nombres', null, { formularioPage }); 
      await And('Digito mi Correo Electrónico', null, { formularioPage }); 
      await And('Digito mi Numero de Telefono', null, { formularioPage }); 
      await And('Selecciono mi Fecha de Nacimiento "01012000"', null, { formularioPage }); 
      await And('Selecciono mi País "Perú"', null, { seleccionarLabelPage }); 
      await And('Selecciono mi Genero "masculino"', null, { seleccionarOpcionPage }); 
      await And('Selecciono mi nivel de experiencia de experiencia "7"', null, { seleccionarOpcionPage }); 
      await And('Selecciono Herramientas que conozco "Selenium,Cypress"', null, { seleccionarOpcionPage }); 
      await And('Digito mis Comentarios "Comentario 1"', null, { formularioPage }); 
      await And('Acepto los Términos y Condiciones "Acepto que estos datos son solo de práctica y no se almacenan."', null, { seleccionarOpcionPage }); 
      await And('Realizar click en button Enviar', null, { seleccionarButtonPage }); 
    });

    test('Example #2', { tag: ['@declarativo'] }, async ({ Given, When, And, formularioPage, seleccionarButtonPage, seleccionarLabelPage, seleccionarOpcionPage }) => { 
      await Given('Accedo a la web Novus Technology', null, { formularioPage }); 
      await And('Accedo al formulario de registro desde el menú Laboratorio', null, { seleccionarButtonPage }); 
      await When('Digito mis nombres', null, { formularioPage }); 
      await And('Digito mi Correo Electrónico', null, { formularioPage }); 
      await And('Digito mi Numero de Telefono', null, { formularioPage }); 
      await And('Selecciono mi Fecha de Nacimiento "01011900"', null, { formularioPage }); 
      await And('Selecciono mi País "Colombia"', null, { seleccionarLabelPage }); 
      await And('Selecciono mi Genero "masculino"', null, { seleccionarOpcionPage }); 
      await And('Selecciono mi nivel de experiencia de experiencia "10"', null, { seleccionarOpcionPage }); 
      await And('Selecciono Herramientas que conozco "Playwright,Postman"', null, { seleccionarOpcionPage }); 
      await And('Digito mis Comentarios "Comentario 2"', null, { formularioPage }); 
      await And('Acepto los Términos y Condiciones "Acepto que estos datos son solo de práctica y no se almacenan."', null, { seleccionarOpcionPage }); 
      await And('Realizar click en button Enviar', null, { seleccionarButtonPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\formulario.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":22,"tags":["@declarativo"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Accedo a la web Novus Technology","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Accedo al formulario de registro desde el menú Laboratorio","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Digito mis nombres","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Digito mi Correo Electrónico","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And Digito mi Numero de Telefono","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And Selecciono mi Fecha de Nacimiento \"01012000\"","stepMatchArguments":[{"group":{"start":34,"value":"\"01012000\"","children":[{"start":35,"value":"01012000","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And Selecciono mi País \"Perú\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Perú\"","children":[{"start":20,"value":"Perú","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And Selecciono mi Genero \"masculino\"","stepMatchArguments":[{"group":{"start":21,"value":"\"masculino\"","children":[{"start":22,"value":"masculino","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And Selecciono mi nivel de experiencia de experiencia \"7\"","stepMatchArguments":[{"group":{"start":50,"value":"\"7\"","children":[{"start":51,"value":"7","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And Selecciono Herramientas que conozco \"Selenium,Cypress\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Selenium,Cypress\"","children":[{"start":37,"value":"Selenium,Cypress","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And Digito mis Comentarios \"Comentario 1\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Comentario 1\"","children":[{"start":24,"value":"Comentario 1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And Acepto los Términos y Condiciones \"Acepto que estos datos son solo de práctica y no se almacenan.\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Acepto que estos datos son solo de práctica y no se almacenan.\"","children":[{"start":35,"value":"Acepto que estos datos son solo de práctica y no se almacenan.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And Realizar click en button Enviar","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@declarativo"],"steps":[{"pwStepLine":25,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Accedo a la web Novus Technology","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Accedo al formulario de registro desde el menú Laboratorio","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Digito mis nombres","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Digito mi Correo Electrónico","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And Digito mi Numero de Telefono","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And Selecciono mi Fecha de Nacimiento \"01011900\"","stepMatchArguments":[{"group":{"start":34,"value":"\"01011900\"","children":[{"start":35,"value":"01011900","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And Selecciono mi País \"Colombia\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Colombia\"","children":[{"start":20,"value":"Colombia","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And Selecciono mi Genero \"masculino\"","stepMatchArguments":[{"group":{"start":21,"value":"\"masculino\"","children":[{"start":22,"value":"masculino","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And Selecciono mi nivel de experiencia de experiencia \"10\"","stepMatchArguments":[{"group":{"start":50,"value":"\"10\"","children":[{"start":51,"value":"10","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And Selecciono Herramientas que conozco \"Playwright,Postman\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Playwright,Postman\"","children":[{"start":37,"value":"Playwright,Postman","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And Digito mis Comentarios \"Comentario 2\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Comentario 2\"","children":[{"start":24,"value":"Comentario 2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And Acepto los Términos y Condiciones \"Acepto que estos datos son solo de práctica y no se almacenan.\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Acepto que estos datos son solo de práctica y no se almacenan.\"","children":[{"start":35,"value":"Acepto que estos datos son solo de práctica y no se almacenan.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And Realizar click en button Enviar","stepMatchArguments":[]}]},
]; // bdd-data-end