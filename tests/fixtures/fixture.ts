import { test as base, createBdd } from 'playwright-bdd';
import { FormularioPage } from '../pages/text.page';
import { SeleccionarOpcionPage } from '../pages/select.page';
import { SeleccionarLabelPage } from '../pages/label.page';
import { UploadArchivo } from '../pages/upload.page';
import { SeleccionarButtonPage } from '../pages/button.page';



type MisFixtures = {
  formularioPage: FormularioPage;
  seleccionarOpcionPage: SeleccionarOpcionPage;
  seleccionarLabelPage: SeleccionarLabelPage;
  uploadArchivo: UploadArchivo;
  seleccionarButtonPage: SeleccionarButtonPage;

};

export const test = base.extend<MisFixtures>({
  formularioPage: async ({ page }, use) => {
    await use(new FormularioPage(page));
  },

  seleccionarOpcionPage: async ({ page }, use) => {
    await use(new SeleccionarOpcionPage(page));
  },
  seleccionarLabelPage: async ({ page }, use) => {
    await use(new SeleccionarLabelPage(page));
  },
  uploadArchivo: async ({ page }, use) => {
    await use(new UploadArchivo(page));
  },
  seleccionarButtonPage: async ({ page }, use) => {
    await use(new SeleccionarButtonPage(page));
  }
  


});

export const { Given, When, Then } = createBdd(test);
