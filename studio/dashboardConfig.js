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
                  buildHookId: '5fb4fbe2c273480cd28735ea',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-85seri27',
                  apiId: 'fa50d965-9589-45d6-a324-9b179c8b67af'
                },
                {
                  buildHookId: '5fb4fbe227fd0b1021d1e38a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s8pwgeob',
                  apiId: 'b338dafe-3cc0-40b4-845c-47f92302966e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/attefall/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s8pwgeob.netlify.app', category: 'apps'}
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
