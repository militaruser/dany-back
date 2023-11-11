import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger} from '@nestjs/common';
import {GqlArgumentsHost, GqlExceptionFilter} from '@nestjs/graphql';
import {GraphQLResolveInfo} from 'graphql/type';

@Catch()
export class ExcepcionesMongoose implements GqlExceptionFilter, ExceptionFilter
{
    async catch(exception: HttpException, host: ArgumentsHost): Promise<void>
    {
        const ctx = host.switchToHttp();
        // const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const gqlHost = GqlArgumentsHost.create(host);
        const info = gqlHost.getInfo<GraphQLResolveInfo>();
        const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        console.log('****', exception);
        if (status === HttpStatus.INTERNAL_SERVER_ERROR)
        {
            // Aquí podrías implementar un manejo más específico de errores internos
            console.log('Errores internos', HttpStatus)
        }

        const errorResponse = {
            statusCode: status,
            timestamp: new Date().toLocaleDateString(),
            error: status !== HttpStatus.INTERNAL_SERVER_ERROR ? exception.message || null : 'Internal server error',
        };

        if (request)
        {
            const error = {
                ...errorResponse,
                path: request.url,
                method: request.method,
            };
            Logger.error(`${request.method} ${request.url}`, JSON.stringify(error), 'ExceptionFilter');
        } else
        {
            const error = {
                ...errorResponse,
                type: info.parentType,
                field: info.fieldName,
            };

            Logger.error(`${info.parentType} ${info.fieldName}`, JSON.stringify(error), 'ExceptionFilter');
        }
    }
}
