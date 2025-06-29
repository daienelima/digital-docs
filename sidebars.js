module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Clouds',
      items: [
        {
          type: 'category',
          label: 'AWS',
          items: [
            'clouds/aws/plano-estudo-saa-c03',
            'clouds/aws/introducao-aws',
            'clouds/aws/vpc',
          ],
        },
        {
          type: 'category',
          label: 'Azure',
          items: [
            'clouds/azure/plano-estudo-az-900',
            'clouds/azure/plano-estudo-dp-900',
            'clouds/azure/plano-estudo-az-204',
           'clouds/azure/servicos-computacao-armazenamento',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Java',
      items: [
        'java/validacoes-request',
        'java/mapstruct',
      ],
    },
  ],
};
