import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { SeleccionarButtonPage } from '../pages/button.page';
import { SeleccionarOpcionPage } from '../pages/select.page';


const { Given, When } = createBdd(test);

Given('Accedo a la web Novus Technology', async ({ formularioPage }) => {
  await formularioPage.irAlFormulario();
}
);

Given('Accedo al formulario de registro desde el menú Laboratorio', async ({ seleccionarButtonPage }) => {
  await seleccionarButtonPage.hacerClicEnHRef();
}
);

When('Digito mis nombres', async ({ formularioPage }) => {
  await formularioPage.ingresarNombres('JULIO CESAR PRADO RAYMUNDO');
}
);

When('Digito mi Correo Electrónico', async ({ formularioPage }) => {
  await formularioPage.ingresarEmail('jcprador@example.com');
}
);

When('Digito mi Numero de Telefono', async ({ formularioPage }) => {
  await formularioPage.ingresarTelefono('999999999');
}
);

When('Selecciono mi Fecha de Nacimiento {string}', async ({formularioPage}, fechNac: number) => {
  await formularioPage.ingresarFechaNacimiento(fechNac);  
});

When('Selecciono mi País {string}', async ({ seleccionarLabelPage }, pais: string) => {

  await seleccionarLabelPage.seleccionarDropDown('Pais', pais);
});

When('Selecciono mi Genero {string}', async ({ seleccionarOpcionPage }, radio: string) => {
  await seleccionarOpcionPage.seleccionarRadio(radio);

}
);

When('Selecciono mi nivel de experiencia de experiencia {string}', async ({seleccionarOpcionPage}, nivel: number) => {
  await seleccionarOpcionPage.establecerExperiencia(nivel);
});

When('Selecciono Herramientas que conozco {string}', async ({ seleccionarOpcionPage }, lista: string) => {
  const herramientas: string[] = lista.split(',').map(item => item.trim());

  // Llama a tu Page Object (asumiendo que 'seleccionarOpcionPage' está instanciada)
  await seleccionarOpcionPage.seleccionarCheckbox(herramientas);

}
);

When('Digito mis Comentarios {string}', async ({formularioPage}, comentarios: string) => {
  await formularioPage.ingresarComentarios(comentarios);
  
});

When('Acepto los Términos y Condiciones {string}', async ({ seleccionarOpcionPage }, lista: string) => {
  const herramientas: string[] = lista.split(',').map(item => item.trim());

  // Llama a tu Page Object (asumiendo que 'seleccionarOpcionPage' está instanciada)
  await seleccionarOpcionPage.seleccionarCheckbox(herramientas);

}
);

When('Realizar click en button Enviar', async ({ seleccionarButtonPage }) => {
  await seleccionarButtonPage.hacerClicEnBoton();
});


