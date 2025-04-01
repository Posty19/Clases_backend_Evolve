const app = require("./src/app");
const { conectDB } = require("./src/config/database");

const port = 3000; //depende de la variable de entorno

const startServer = async () => {
  try {
    await conectDB();
    app.listen(port, () => {
      console.log(`Servidor corriendo en puerto ${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
