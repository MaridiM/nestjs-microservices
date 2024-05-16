import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { IntrospectAndCompose } from '@apollo/gateway'
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo'

const subgraphs = [
    { name: 'auth', url: 'http://localhost:8001/auth' },
    { name: 'payments', url: 'http://localhost:8002/payments' },
    { name: 'posts', url: 'http://localhost:8003/posts' },
    { name: 'users', url: 'http://localhost:8004/users' },
]

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
            driver: ApolloGatewayDriver,
            gateway: {
                supergraphSdl: new IntrospectAndCompose({ subgraphs }),
            },
            server: {
                path: 'api',
                playground: true,
                
            },
        }),
    ],
})
export class AppModule {}
