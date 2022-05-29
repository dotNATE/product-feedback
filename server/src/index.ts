import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './Schema'
// import { sequelize } from './Models';

const main = async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(
        '/graphql',
        graphqlHTTP({
          schema,
          graphiql: true,
        }),
      );

    // sequelize.sync();

    const portNum = 3001;
    app.listen(portNum, () => {
        console.log(`Server running on port ${portNum}`);
    });
};

main().catch((err) => {
    console.error(err);
});