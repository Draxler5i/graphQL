import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from "./schema";

import { connect } from "./database";

const app = express();
const PORT = 3000;
connect();

app.get('/', (req, res) => {
    res.json({
        message: "Hello world!"
    });
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
        messageId: 'test'
    }
}));

app.listen( PORT, () => console.log(`Server on port ${PORT}`));