import {_UnmarshalledEventStream} from './_EventStream';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetEventStreamOutput shape
 */
export interface GetEventStreamOutput {
    /**
     * Model for an event publishing subscription export.
     */
    EventStream: _UnmarshalledEventStream;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
