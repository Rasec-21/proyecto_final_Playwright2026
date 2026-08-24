import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SeleccionarLabelPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private selectoresDropDown: Record<string, string> = {
        'Departamento': '#department',
        'Ciudad': '#city',
        'Pais': '#pais'

    }
    private campoDropDown(nombreCampo: string) {
        const selector = this.selectoresDropDown[nombreCampo];
        if (!selector) {
            throw new Error(`El dropdown "${nombreCampo}"no está definido en el Page Object.`);
        }
        return this.page.locator(selector);
        //return this.page.getByRole('combobox', { name: 'select-department' });
        //return this.page.locator('#department');
    }

    private campoSelectorMultiple() {
        //return this.page.getByRole('listbox', { name: 'Comandos de Selenium' });
         return this.page.locator('select[name="selenium_commands"]');
    }

    async seleccionarDropDown(nombreCampo: string, nombreOpcion: string) {
        const dropdown = this.campoDropDown(nombreCampo);
        //await dropdown.click();
        //await dropdown.waitFor({ state: 'visible' });
        /*const opcionFormateada = nombreOpcion
            .toUpperCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "");
        await dropdown.selectOption({ value: opcionFormateada });*/
        await dropdown.selectOption(nombreOpcion);
        //await this.page.waitForTimeout(5000); 
        //await this.page.pause();
    }

    async verificarSeleccionarDropDown(nombreCampo: string, nombreOpcion: string) {
        const dropdown = this.campoDropDown(nombreCampo);
        await expect(dropdown).toHaveValue(nombreOpcion);
        //await dropdown.selectOption({label: nombreOpcion })
    }

    async seleccionarSelectorMultiple(opciones: string[]) {
        const dropdownMultiple = this.campoSelectorMultiple();

        await dropdownMultiple.waitFor({ state: 'visible' });

        await dropdownMultiple.selectOption(opciones);

        //await this.page.pause();
    }

    async verificarComandosSeleccionados(opcionesEsperadas: string[]) {

        await expect(this.campoSelectorMultiple()).toHaveValues(opcionesEsperadas);
    }
}



