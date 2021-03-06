import {Structure as _Structure_} from '@aws-sdk/types';

export const RetireGrantInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        GrantToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        GrantId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};