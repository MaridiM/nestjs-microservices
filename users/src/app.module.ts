import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: {
                federation: 2,
                path: 'users',
            },
            path: 'users',
            playground: true,
        }),
    ],
    providers: [AppService, AppResolver],
})
export class AppModule {}
