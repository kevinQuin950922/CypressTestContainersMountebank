const { GenericContainer } = require('testcontainers');
const cypress = require('cypress')

async function cargarImagen() {

    await new GenericContainer('kevin950922/image_mountebank')
        .withExposedPorts(
            {
                container: 5000,
                host: 5000
            },
            {
                container: 5001,
                host: 5001
            },
            {
                container: 5002,
                host: 5002
            }
        )
        .start();


    cypress.run();
    

}

cargarImagen();
