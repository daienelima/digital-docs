import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/digital-docs/__docusaurus/debug',
    component: ComponentCreator('/digital-docs/__docusaurus/debug', '746'),
    exact: true
  },
  {
    path: '/digital-docs/__docusaurus/debug/config',
    component: ComponentCreator('/digital-docs/__docusaurus/debug/config', '2e1'),
    exact: true
  },
  {
    path: '/digital-docs/__docusaurus/debug/content',
    component: ComponentCreator('/digital-docs/__docusaurus/debug/content', '22d'),
    exact: true
  },
  {
    path: '/digital-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/digital-docs/__docusaurus/debug/globalData', '0d2'),
    exact: true
  },
  {
    path: '/digital-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/digital-docs/__docusaurus/debug/metadata', '540'),
    exact: true
  },
  {
    path: '/digital-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/digital-docs/__docusaurus/debug/registry', '9cc'),
    exact: true
  },
  {
    path: '/digital-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/digital-docs/__docusaurus/debug/routes', '52f'),
    exact: true
  },
  {
    path: '/digital-docs/docs',
    component: ComponentCreator('/digital-docs/docs', 'b68'),
    routes: [
      {
        path: '/digital-docs/docs',
        component: ComponentCreator('/digital-docs/docs', '1e7'),
        routes: [
          {
            path: '/digital-docs/docs',
            component: ComponentCreator('/digital-docs/docs', '370'),
            routes: [
              {
                path: '/digital-docs/docs/aws/vpc',
                component: ComponentCreator('/digital-docs/docs/aws/vpc', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/digital-docs/docs/java/mapstruct',
                component: ComponentCreator('/digital-docs/docs/java/mapstruct', '8da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/digital-docs/docs/java/oop',
                component: ComponentCreator('/digital-docs/docs/java/oop', '32b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/digital-docs/docs/java/validacoes-request',
                component: ComponentCreator('/digital-docs/docs/java/validacoes-request', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
