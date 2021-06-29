export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60dba11c93614c23d192c192',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1ubwsxxz',
                  apiId: 'e34adb93-00c8-4302-a6b8-7e3db288c412'
                },
                {
                  buildHookId: '60dba11cab980a231cf3cef2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nr547oy6',
                  apiId: '1d8a4816-2b34-461b-b0a9-c203ab23fcb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YvesJudeMatta/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nr547oy6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
