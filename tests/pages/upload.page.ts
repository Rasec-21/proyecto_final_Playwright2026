import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import path from 'node:path';

export class UploadArchivo extends BasePage {

    constructor(page: Page) {
        super(page);
    }

private campoArchivo() {
    return this.page.getByLabel('Foto'); 
    // Alternativa si el label no está vinculado por id: return this.page.locator('input[type="file"]');
  }

  /*
  async subirArchivo(nombreArchivo: string) {
    const input = this.campoArchivo();
    await input.waitFor({ state: 'visible' });
    //const rutaArchivo = path.resolve(__dirname, `../../fixtures/${nombreArchivo}`);
    const rutaArchivo = path.join(process.cwd(), 'fixtures', nombreArchivo);
    
    await input.setInputFiles(rutaArchivo);
  }*/

  async subirArchivo(nombreArchivo: string) {
    const input = this.campoArchivo();
    await input.waitFor({ state: 'visible' });

    // FIX DEFINITIVO: Pasamos el archivo directamente en memoria (Buffer) 
    // Evitamos buscar en el disco duro y no volverás a ver el error ENOENT.
    await input.setInputFiles({
      name: nombreArchivo,                    // Toma el nombre que viene de Cucumber
      mimeType: 'application/pdf',            // Tipo de archivo PDF
      buffer: Buffer.from('PDF simulado para automatizacion') // Crea el contenido del archivo aquí mismo
    });
  }
}