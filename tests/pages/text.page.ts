import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class FormularioPage extends BasePage {
  private readonly url =
    'https://novustechnology.pe/laboratorio';

  constructor(page: Page) {
    super(page);
  }

  // Navegación
  async irAlFormulario() {
    await this.page.goto(this.url);
  }

  // Locators privados
  private campoNombres() {
    return this.page.getByRole('textbox', { name: 'Nombre completo' });
  }

  private campoEmail() {
    return this.page.getByRole('textbox', { name: 'Correo electrónico' });
  }

  private campoTelefono() {
    return this.page.getByRole('textbox', { name: 'Teléfono' });
  }

  private campoComentarios(){
    return this.page.getByRole('textbox', { name: 'Comentarios' })
  }

  private campoFechaNacimiento(){
    // return this.page.getByText('Fecha de nacimiento')
    return this.page.locator('input#fecha-nacimiento');
  }


  // Acciones públicas
  async ingresarNombres(nombres: string) {
    await this.campoNombres().fill(nombres);
  }

  async ingresarEmail(correo: string) {
    await this.campoEmail().fill(correo);
  }
  async ingresarTelefono(telefono: string) {
    await this.campoTelefono().fill(telefono);
  }

  async ingresarComentarios(comentarios: string){
    await this.campoComentarios().fill(comentarios)
  }

  async ingresarFechaNacimiento(fechNac: number) {
    const fechString = fechNac.toString().padStart(8,'0');

    const dia = fechString.substring(0,2);
    const mes = fechString.substring(2,4);
    const anio = fechString.substring(4,8);

    const fechFormateada = `${anio}-${mes}-${dia}`;

    await this.campoFechaNacimiento().fill(fechFormateada);
  }

}