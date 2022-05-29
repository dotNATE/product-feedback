import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { Sequelize } from 'sequelize'

const main = async () => {
    const app = express();

    const sequelize = new Sequelize('product_feedback', 'root', 'password', {
        host: 'localhost',
        dialect: 'mysql',
    });

    // try {
    //     await sequelize.authenticate();
    //     console.log('Database connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    //   }

    app.use(cors())
    app.use(express.json())
    // app.use(
    //     '/graphql',
    //     graphqlHTTP({
    //       schema: MyGraphQLSchema,
    //       graphiql: true,
    //     }),
    //   );

    const portNum = 3001;
    app.listen(portNum, () => {
        console.log(`Server running on port ${portNum}`);
    })
};

main().catch((err) => {
    console.error(err);
})