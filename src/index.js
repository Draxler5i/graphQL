import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from "./schema";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello world!"
    });
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen( PORT, () => console.log(`Server on port ${PORT}`));