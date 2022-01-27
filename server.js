const express = require('express')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')

const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadFilesSync } = require('@graphql-tools/load-files')

const app = express()

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray
})


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))


app.use('/', (req, res) => {
  res.send('ok')
})

app.listen(3000, () => {
  console.log('Running GraphQl Server....')
})