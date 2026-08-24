import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SeleccionarButtonPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private campobutton() {
        return this.page.locator("xpath=//button[text()='Enviar']");

    }

    private campoHRef(){
        return this.page.locator("//a[text()='Practicar formulario']")
    }

    async hacerClicEnBoton() {
        const boton = this.campobutton();
        await boton.waitFor({ state: 'visible' });
        await boton.click();
        //await this.page.pause();
        
    }

    async hacerClicEnHRef(){
        const boton = this.campoHRef();
        await boton.waitFor({ state: 'visible' });
        await boton.click();
        //await this.page.pause();
    }
}