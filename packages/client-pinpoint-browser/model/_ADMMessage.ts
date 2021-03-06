import {_MapOf__string} from './_MapOf__string';
import {_MapOfListOf__string} from './_MapOfListOf__string';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ADMMessage: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Action: {
            shape: {
                type: 'string',
            },
        },
        Body: {
            shape: {
                type: 'string',
            },
        },
        ConsolidationKey: {
            shape: {
                type: 'string',
            },
        },
        Data: {
            shape: _MapOf__string,
        },
        ExpiresAfter: {
            shape: {
                type: 'string',
            },
        },
        IconReference: {
            shape: {
                type: 'string',
            },
        },
        ImageIconUrl: {
            shape: {
                type: 'string',
            },
        },
        ImageUrl: {
            shape: {
                type: 'string',
            },
        },
        MD5: {
            shape: {
                type: 'string',
            },
        },
        RawContent: {
            shape: {
                type: 'string',
            },
        },
        SilentPush: {
            shape: {
                type: 'boolean',
            },
        },
        SmallImageIconUrl: {
            shape: {
                type: 'string',
            },
        },
        Sound: {
            shape: {
                type: 'string',
            },
        },
        Substitutions: {
            shape: _MapOfListOf__string,
        },
        Title: {
            shape: {
                type: 'string',
            },
        },
        Url: {
            shape: {
                type: 'string',
            },
        },
    },
};