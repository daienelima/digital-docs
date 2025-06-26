import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
