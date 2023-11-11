import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PubSub } from 'graphql-subscriptions';
import * as process from 'process';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER } from '@nestjs/core';
import { join } from 'path';
import config, { VariablesEntorno } from './config/config';
import { ExcepcionesMongoose } from './exceptions/excepciones';
import { FormularioModule } from './formulario/formulario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`, load: [config], expandVariables: true, isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      buildSchemaOptions:
                {
                  dateScalarMode: 'timestamp',
                },
      playground: true,
      context: ({ req }) => ({ req }),
      formatError: (error) => ({
        message: error.message,
        path: error.path,
        locations: error.locations,
        extensions: error.extensions,
      }),
      autoTransformHttpErrors: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (
        {
          uri: configService.get(VariablesEntorno.urlDB),
        }),
    }),
    FormularioModule,
  ],
  providers: [{ provide: 'PUB_SUB', useClass: PubSub }, { provide: APP_FILTER, useClass: ExcepcionesMongoose }],
})
export class AppModule
{}
