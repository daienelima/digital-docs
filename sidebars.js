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
            'clouds/aws/introducao-aws',
            'clouds/aws/vpc',
          ],
        },
        {
          type: 'category',
          label: 'Azure',
          items: [
            'clouds/azure/introducao-azure',
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
