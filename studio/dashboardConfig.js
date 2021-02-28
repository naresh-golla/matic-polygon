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
                  buildHookId: '603b688b79b14e4a50971523',
                  title: 'Sanity Studio',
                  name: 'project-code-1-studio',
                  apiId: 'f5125241-ff39-462d-b848-29c283fc9d2d'
                },
                {
                  buildHookId: '603b688b0a596a75ccfbac7d',
                  title: 'Blog Website',
                  name: 'project-code-1',
                  apiId: '25e9b81c-6924-476d-9a7b-64d1f9149973'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/naresh-golla/project-code1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://project-code-1.netlify.app', category: 'apps'}
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
