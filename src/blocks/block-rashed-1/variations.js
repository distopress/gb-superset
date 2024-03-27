import { Column100, Column5050, Column3366, Column6633, Column333333, Column255025 } from './column-svg';

export const variations = [
    {
        name: '100',
        title: '100',
        icon: Column100,
        innerBlocks: [
            ['gb-superset/block-rashed-1', { isContainerSelected: true }]
        ],
        scope: ['block'],
    },
    {
        name: '50-50',
        title: '50/50',
        icon: Column5050,
        innerBlocks: [
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 50, unit: "%" }, isContainerSelected: true },
            ],
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 50, unit: "%" }, isContainerSelected: true },
            ]
        ],
        scope: ['block'],
    },
    {
        name: '33-66',
        title: '33/66',
        icon: Column3366,
        innerBlocks: [
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 33, unit: "%" }, isContainerSelected: true },
            ],
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 66, unit: "%" }, isContainerSelected: true },
            ]
        ],
        scope: ['block'],
    },
    {
        name: '66-33',
        title: '66/33',
        icon: Column6633,
        innerBlocks: [
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 66, unit: "%" }, isContainerSelected: true },
            ],
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 33, unit: "%" }, isContainerSelected: true },
            ]
        ],
        scope: ['block'],
    },
    {
        name: '33-33-33',
        title: '33/33/33',
        icon: Column333333,
        innerBlocks: [
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 33, unit: "%" }, isContainerSelected: true },
            ],
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 33, unit: "%" }, isContainerSelected: true },
            ],
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 33, unit: "%" }, isContainerSelected: true },
            ]
        ],
        scope: ['block'],
    },
    {
        name: '25-50-25',
        title: '25/50/25',
        icon: Column255025,
        innerBlocks: [
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 25, unit: "%" }, isContainerSelected: true },
            ],
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 50, unit: "%" }, isContainerSelected: true },
            ],
            [
                'gb-superset/block-rashed-1',
                { customWidth: { size: 25, unit: "%" }, isContainerSelected: true },
            ]
        ],
        scope: ['block'],
    },


];