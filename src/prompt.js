/** @format */

export const prompt = (changes) => `
Redactame un texto en ingles para un commit siguiendo como formato el estandar de los convetional commits basado en los siguientes cambios que se hicieron en el proyecto: 

${changes}

ten en cuenta esta documentacion de como deben ser los commits:
**Conventional Commits Simplificado con Ejemplos y Detalles:**

**Descripción Breve:**
Conventional Commits es una convención que establece reglas para estructurar mensajes de confirmación en el desarrollo de software, facilitando la automatización y la comunicación. Los mensajes siguen el formato 
<tipo>[ámbito opcional]: <descripción>

[optional body] (only  if it makes sense) 

[optional footers] (only  if it makes sense)
, donde el tipo puede ser fix, feat, build, chore, ci, docs, style, refactor, perf, o test. Además, permite la inclusión de un cuerpo (body) y pies de página (footer) opcionales para proporcionar información adicional.

**Tipos de Conventional Commits con Ejemplos:**

1. **fix:**
   - *Ejemplo:* fix: Soluciona el error de análisis de arrays con espacios múltiples en strings.

2. **feat:**
   - *Ejemplo:* feat: Agrega la capacidad de parsear arrays al analizador.

3. **build:**
   - *Ejemplo:* build: Actualiza las dependencias del sistema de construcción.

4. **chore:**
   - *Ejemplo:* chore: Elimina el soporte para Node 6.

5. **ci:**
   - *Ejemplo:* ci: Configura las pruebas de integración continua para la nueva funcionalidad.

6. **docs:**
   - *Ejemplo:* docs: Corrige la ortografía en el CHANGELOG.

7. **style:**
   - *Ejemplo:* style: Ajusta la indentación del código.

8. **refactor:**
   - *Ejemplo:* refactor: Optimiza la lógica de manejo de solicitudes.

9. **perf:**
   - *Ejemplo:* perf: Mejora el rendimiento del algoritmo de búsqueda.

10. **test:**
    - *Ejemplo:* test: Añade nuevas pruebas para la funcionalidad de búsqueda.

**Detalles Adicionales - Body y Footer:**
- **Cuerpo (Body):** Se puede agregar un cuerpo que sigue inmediatamente después de la descripción para proporcionar información contextual adicional sobre los cambios. Ejemplo:
    
    refactor: Optimiza la lógica de manejo de solicitudes.

    Introduce un identificador de solicitud y una referencia a la última solicitud. Ignora las respuestas entrantes que no provengan de la última solicitud.
    Elimina los tiempos de espera que se utilizaban para mitigar el problema de competencia pero que ahora son obsoletos.

    Revisado por: Z
    Refs: #123
    

- **Pie de Página (Footer):** Se pueden agregar pies de página, que siguen uno o más espacios en blanco después del cuerpo, para proporcionar información adicional siguiendo una convención similar al formato de trailer de git. Ejemplo:
    
    feat: Agrega la capacidad de parsear arrays al analizador.

    BREAKING CHANGE: La clave extends en el archivo de configuración ahora se utiliza para extender otros archivos de configuración.
    

En resumen, Conventional Commits no solo estructura los mensajes de confirmación, sino que también permite detalles adicionales a través del cuerpo y pies de página para una comunicación más completa y efectiva en el desarrollo del software.
`;
