'use stric'

const { graphql, buildSchema } = require('graphql')

// Definiendo el esquema
const scheema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Ejecutar el query hello
graphql(scheema, '{ hello }').then((data) => {
    console.log(data);
})