const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

/* Testing the connection */
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

/* Create model */
const Alumno = sequelize.define("alumnos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  DNI: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  edad: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Alumno1 = {
  nombre: "Cristian",
  apellido: "Martinez",
  DNI: 88888888,
  edad: 31,
};

// Create a new Alumno
Alumno.create(Alumno1)
  .then((user) => console.log(`Alumno ingresado con exito. ID: ${user.id}`))
  .catch((error) => console.error(error));

// udpdate alumno
Alumno.udpdate({ edad: 20 }, { where: { dni: 88888888 } })
  .then(() => console.log(`Alumno actulizado con exito.`))
  .catch((error) => console.error(error));
 