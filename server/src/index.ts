import 'dotenv/config';

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

    app.listen(process.env.PORT_NUM, () => {
      console.log(`Server running on port ${process.env.PORT_NUM}`);
    });
};

main().catch((err) => {
    console.error(err);
});