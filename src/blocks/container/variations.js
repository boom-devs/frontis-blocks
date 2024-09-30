// File: variations.js
import { __ } from '@wordpress/i18n';
import icons from './icons';

export const variations = [
  {
    name: 'full-width',
    title: __('Full Width', 'frontis-blocks'),
    icon: icons.fullWidth,
    attributes: { layout: 'full-width' },
    innerBlocks: [
      ['frontis-blocks/container', { placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'two-columns',
    title: __('Two Columns', 'frontis-blocks'),
    icon: icons.twoColumns,
    attributes: { layout: 'two-columns' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'three-columns',
    title: __('Three Columns', 'frontis-blocks'),
    icon: icons.threeColumns,
    attributes: { layout: 'three-columns' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'four-columns',
    title: __('Four Columns', 'frontis-blocks'),
    icon: icons.fourColumns,
    attributes: { layout: 'four-columns' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'two-rows-two-columns',
    title: __('Two Rows, Two Columns', 'frontis-blocks'),
    icon: icons.twoRowsTwoColumns,
    attributes: { layout: 'two-rows-two-columns' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'three-columns-wide-center',
    title: __('Three Columns (Wide Center)', 'frontis-blocks'),
    icon: icons.threeColumnsWideCenter,
    attributes: { layout: 'three-columns-wide-center' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column fb-column-25', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column fb-column-50', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column fb-column-25', placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'two-thirds-one-third',
    title: __('Two-Thirds One-Third', 'frontis-blocks'),
    icon: icons.twoThirdsOneThird,
    attributes: { layout: 'two-thirds-one-third' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column fb-column-66', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column fb-column-33', placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'one-third-two-thirds',
    title: __('One-Third Two-Thirds', 'frontis-blocks'),
    icon: icons.oneThirdTwoThirds,
    attributes: { layout: 'one-third-two-thirds' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column fb-column-33', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column fb-column-66', placeholder: true }]
    ],
    scope: ['block'],
  },
  {
    name: 'two-rows-three-columns',
    title: __('Two Rows, Three Columns', 'frontis-blocks'),
    icon: icons.twoRowsThreeColumns,
    attributes: { layout: 'two-rows-three-columns' },
    innerBlocks: [
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }],
      ['frontis-blocks/container', { className: 'fb-column', placeholder: true }]
    ],
    scope: ['block'],
  },
];

export default variations;