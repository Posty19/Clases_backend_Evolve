const path = require("path");
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createDir = () => {
  rl.question("nombre de la carpeta: ", (dir) => {
    const dirPath = path.join(__dirname) + "/" + dir;
    fs.mkdir(dirPath, { recursive: true }, (error) => {
      if (error) console.log("direectorio no creado: ", error);
      else createFile(dirPath);
    });
  });
};
const createFile = (dir) => {
  rl.question("nombre del archivo con su extension: ", (file) => {
    const filePath = dir + "/" + file;
    fs.writeFile(filePath, "", "utf8", (error) => {
      if (error) console.log("archivo no creado: ", error);
      else writeFile(filePath);
    });
  });
};

const writeFile = (file) => {
  rl.question("Linea para añadir: ", (line) => {
    fs.appendFile(file, line + "\n", "utf8", (error) => {
      if (error) console.log("linea no insertada: ", error);
      else {
        rl.question("Deseas continuar? (s/n) ", (confirm) => {
          if (confirm === "s") writeFile(file);
          else rl.close();
        });
      }
    });
  });
};
createDir();
