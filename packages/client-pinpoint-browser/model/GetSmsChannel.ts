import {GetSmsChannelInput} from './GetSmsChannelInput';
import {GetSmsChannelOutput} from './GetSmsChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetSmsChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetSmsChannel',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/channels/sms',
    },
    input: {
        shape: GetSmsChannelInput,
    },
    output: {
        shape: GetSmsChannelOutput,
    },
    errors: [
        {
            shape: BadRequestException,
        },
        {
            shape: InternalServerErrorException,
        },
        {
            shape: ForbiddenException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: MethodNotAllowedException,
        },
        {
            shape: TooManyRequestsException,
        },
    ],
};