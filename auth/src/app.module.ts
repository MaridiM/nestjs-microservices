import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { AppResolver } from './app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo'

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: {
                federation: 2,
                path: 'auth',
            },
            path: 'auth',
            playground: true,
        }),
    ],
    providers: [AppService, AppResolver],
})
export class AppModule {}
