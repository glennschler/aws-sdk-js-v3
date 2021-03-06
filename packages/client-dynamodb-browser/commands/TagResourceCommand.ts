import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {TagResource} from '../model/TagResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {TagResourceInput} from '../types/TagResourceInput';
import {TagResourceOutput} from '../types/TagResourceOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';
export * from '../types/TagResourceInput';
export * from '../types/TagResourceOutput';
export * from '../types/TagResourceExceptionsUnion';

export class TagResourceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    TagResourceInput,
    OutputTypesUnion,
    TagResourceOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        TagResourceInput,
        TagResourceOutput,
        Blob
    >();

    constructor(readonly input: TagResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<TagResourceInput, TagResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: TagResource
        };

        return stack.resolve(
            handler<TagResourceInput, TagResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}