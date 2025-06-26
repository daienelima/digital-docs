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
    path: '/digital-docs/404',
    component: ComponentCreator('/digital-docs/404', '717'),
    exact: true
  },
  {
    path: '/digital-docs/blog',
    component: ComponentCreator('/digital-docs/blog', 'be4'),
    exact: true
  },
  {
    path: '/digital-docs/blog/archive',
    component: ComponentCreator('/digital-docs/blog/archive', '155'),
    exact: true
  },
  {
    path: '/digital-docs/blog/primeiro-post',
    component: ComponentCreator('/digital-docs/blog/primeiro-post', '765'),
    exact: true
  },
  {
    path: '/digital-docs/blog/tags',
    component: ComponentCreator('/digital-docs/blog/tags', '4e3'),
    exact: true
  },
  {
    path: '/digital-docs/blog/tags/desenvolvimento',
    component: ComponentCreator('/digital-docs/blog/tags/desenvolvimento', 'a2f'),
    exact: true
  },
  {
    path: '/digital-docs/blog/tags/diario',
    component: ComponentCreator('/digital-docs/blog/tags/diario', '57e'),
    exact: true
  },
  {
    path: '/digital-docs/blog/tags/inicio',
    component: ComponentCreator('/digital-docs/blog/tags/inicio', '73d'),
    exact: true
  },
  {
    path: '/digital-docs/docs',
    component: ComponentCreator('/digital-docs/docs', '40e'),
    routes: [
      {
        path: '/digital-docs/docs',
        component: ComponentCreator('/digital-docs/docs', '53c'),
        routes: [
          {
            path: '/digital-docs/docs',
            component: ComponentCreator('/digital-docs/docs', '027'),
            routes: [
              {
                path: '/digital-docs/docs/clouds/aws/introducao-aws',
                component: ComponentCreator('/digital-docs/docs/clouds/aws/introducao-aws', '62d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/digital-docs/docs/clouds/aws/vpc',
                component: ComponentCreator('/digital-docs/docs/clouds/aws/vpc', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/digital-docs/docs/clouds/azure/introducao-azure',
                component: ComponentCreator('/digital-docs/docs/clouds/azure/introducao-azure', '334'),
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
    path: '/digital-docs/',
    component: ComponentCreator('/digital-docs/', '8e6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
