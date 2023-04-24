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

const Alumnos = [
    { nombre: 'John', apellido: 'Lennon',DNI:12312312,edad:20 },
    { name: 'Paul', apellido: 'Mccartney', DNI: 22222222, edad:20},
    { name: 'Ringo', apellido: 'Starr',DIN: 33333333, edad: 20}
  ];

// Create multiple 
Alumno.bulkCreate(Alumnos)
.then(data => console.log(`Se agregaron los siguientes alumnos: ${data}`))
.catch(err =>  console.error(err));

// udpdate multiple
Alumno.udpdate({ edad: 70 }, { where: { edad: 20 } })
  .then(() => console.log(`Alumnos actulizado con exito.`))
  .catch((error) => console.error(error));
 