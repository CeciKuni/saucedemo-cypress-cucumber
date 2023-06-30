# Demo Cypress con Cucumber

Breve prueba con Cypress y Cucumber, si bien no hay framework oficial de Cypress para Cucumber, existe un [framework "Cypress-cucumber-preprocessor"](https://github.com/badeball/cypress-cucumber-preprocessor) completo, el cual elegí utilizar este porque es el que sigue teniendo mantenimiento.
La demo solo tiene casos de prueba de login. Lo que se necesita es tener los archivos *.feature con los casos escritos en formato Gherkin, luego escribir los casos en Cypress tomando los títulos de los steps y por último indicar en los archivos de configuración las ubicaciones de esos features y de los tests.

## Datos

1. Página de prueba utilizada: [saucedemo](https://www.saucedemo.com/)
2. Sistema Operativo: Windows 10.
3. Navegadores disponibles en Cypress: Chrome, Edge, Electron y Firefox.
4. IDE: Visual Studio Code.
5. El proyecto cuenta con capturas de pantalla en formato .png que se guardan sólo si el test falla. Estos se guardan por defecto en la carpeta "screenshots".
7. El proyecto también cuenta una carpeta "videos", que no lo incluyo en este proyecto.

## Instalaciones realizadas

- [Nodejs](https://nodejs.org/es/download). Configurar la ruta de la carpeta "nodejs" en las variables de entorno de Windows, con esto podremos utilizar el comando npm, para ver las versiones:
```
$ node -v
```
```
$ npm -v
```
- Cypress: instalar desde la carpeta del proyecto. Esto generará la carpeta node_modules.
```
$ npm  install cypress --save-dev
```
- Librería npx (conjuntos de comandos para ejecutar los scripts).
```
$ npm  install -g npx
```
- Para cucumber:
```
$ npm install @badeball/cypress-cucumber-preprocessor
```
- Preprocesador utilizado esbuild:
```
$ npm i @bahmutov/cypress-esbuild-preprocessor
```


## Estructura del proyecto

- [cypress](cypress) - Carpeta de Cypress con las siguientes sub carpetas:
- [e2e](e2e) - Con las carpetas:
	-- [login](login) - Aquí decidí guardar el archivo de feature y el .js de la prueba. El "login.feature" es el que se utiliza para las pruebas. El "loginOriginal.feature" es la manera en que me hubiese gustado que quede.
- [fixtures](fixtures) - Archivos .json utilizados para almacenar las variable utilizadas en las pruebas.
- [pages](pages) - Carpeta con los POM y locators.
- [support](support) - Archivo commands.js que genera Cypress (para guardar funciones de javascript o typescript personalizados). Archivo e2e.js comandos e instrucciones que utilizan los tests.
- [videos](videos) - Video en formato .mp4 de las pruebas.
- [cypress.config.js](cypress.config.js) - Archivo de Cypress con las configuraciones generales.
- [package.json](package.json) - En este archivo se pueden configurar atajos para ejecutar los scripts y correr los tests. También están las versiones de las dependencias utilizadas en el proyecto.
- [.cypress-cucumber-preprocessorrc.json](.cypress-cucumber-preprocessorrc.json) - En este archivo se pueden configurar más parámetros para utilizar el framework de cucumber. Pero no es necesario, se puede confirgurar en el package.json también.

## Comandos
Este comando permite abrir la ventana de interfaz de Cypress y de allí seleccionar el tipo de test (e2e, browser y spec que vendría a ser el test a ejecutar).
```
$ npx cypress open
```
O bien si se quiere correr un testcase en particular, por ejemplo el de login, sin tener que abrir la interfaz de Cypress:
```
$ cypress run --spec cypress/e2e/test_login.cy.js --browser chrome
```
Para ejecutar los test por consola sin abrir el navegador o la interfaz de Cypress:
```
$ npm test
```

## Conclusiones
Empecé este proyecto con muchas espectativas, ya que, el formato de Gherkin me parece algo genial pero al llevarlo a Cypress se fue complicando bastante al menos con este framework utilizado. 
- Primero, no permitía repetir los nombres de los steps (tuve que reescribir varias veces los tests).
- No está soportado el "And" (hay que utilizar otro "Then" en su lugar) ni el "Scenario".
-  Si se tienen más de un test en el mismo feature, se vuelve complicado para armar los casos de automation, ya que sólo podés utilizar Given, When y Then.
-  No pude hacer funcionar el reporte html porque no me generó nunca los archivos .json (no quise seguir investigando porque estuve muchas horas intentando).
-  Como conclusión, es muy interesante y recomiendo al que automatiza, basarse en Gherkin, pero no es necesario instalarse Cucumber. Ya de por sí, Cypress es bastante descriptivo y prefiero seguir utilizando los comandos que ofrece Cypress.

