export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff979acdfa7f2c84e25030e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hfcymkhq',
                  apiId: '95fdce9b-53f2-4db3-860c-e9b2424e6cf0'
                },
                {
                  buildHookId: '5ff979ac3b9046b83e78156f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qtv4btsr',
                  apiId: 'a12a177b-796a-4869-a97d-c57c5c3aae72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamievasales/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qtv4btsr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
