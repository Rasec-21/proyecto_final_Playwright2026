import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SeleccionarOpcionPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }



    private campoCheckbox(opcionc: string) {
        //return this.page.locator(//*[@id="registroForm"]/div[2]/div[1]/div/div[1]/label)
        //return this.page.getByLabel('Pasatiempos');
        return this.page.getByRole('checkbox', { name: opcionc });

    }

    private campoGenero(opciong: string) {
        return this.page.getByRole('radio', { name: opciong });
    }


    private sliderExperiencia = 'input#experiencia';
    private valorExperiencia = '#experiencia-valor';


    async seleccionarCheckbox(opcionesc: string[]) {
        await this.page.locator('#preloader').waitFor({ state: 'hidden' });

        for (const opcion of opcionesc) {
            const checkbox = this.campoCheckbox(opcion);
            await checkbox.waitFor({ state: 'visible' });
            await checkbox.check();
            const yaMarcado = await checkbox.isChecked();
            if (!yaMarcado) {
                await checkbox.check();

            }
        }
        //await this.page.waitForTimeout(5000); 
        //await this.page.pause();
    }


    async seleccionarRadio(opcionesr: string) {
        await this.campoGenero(opcionesr).check()
        //const radio = this.campoGenero(opcionesg)
        //await radio.check();

    }
    async verificarSeleccionarRadio(opcionesr: string) {
        await expect(this.campoGenero(opcionesr)).toBeChecked();

    }

    async establecerExperiencia(nivel: number) {
        await this.page.locator(this.sliderExperiencia).evaluate((el: HTMLInputElement, nuevoValor) => {
            const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if (valueSetter) {
                // 2. Forzamos la asignación del valor a través del setter del navegador
                valueSetter.call(el, nuevoValor.toString());
            } else {
                // Fallback en caso de que no exista el setter
                el.value = nuevoValor.toString();
            }
            // el.value = nuevoValor.toString();
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }, nivel);

        //await this.page.pause();
    }

    // Obtiene el texto del número actual en la pantalla
    async obtenerValorVisibleExperiencia() {
        return await this.page.locator(this.valorExperiencia).innerText();
    }
}

