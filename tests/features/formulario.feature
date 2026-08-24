Feature: Registro de formulario Novus Technology

    @declarativo
    Scenario: Completar los datos en el formulario correctamente

        Given Accedo a la web Novus Technology
        And Accedo al formulario de registro desde el menú Laboratorio
        When Digito mis nombres
        And Digito mi Correo Electrónico
        And Digito mi Numero de Telefono
        And Selecciono mi Fecha de Nacimiento "<fech_nac>"
        And Selecciono mi País "<pais>"
        And Selecciono mi Genero "<genero>"
        And Selecciono mi nivel de experiencia de experiencia "<experiencia>"
        And Selecciono Herramientas que conozco "<herramientas>"
        And Digito mis Comentarios "<comentarios>"
        And Acepto los Términos y Condiciones "<term_cond>"
        And Realizar click en button Enviar

        Examples:
            | fech_nac  | pais      | genero    | herramientas        | comentarios  | term_cond                                                      | experiencia |
            | 01012000  | Perú      | masculino | Selenium,Cypress    | Comentario 1 | Acepto que estos datos son solo de práctica y no se almacenan. | 7           |
            | 01011900  | Colombia  | masculino | Playwright,Postman  | Comentario 2 | Acepto que estos datos son solo de práctica y no se almacenan. | 10          |
