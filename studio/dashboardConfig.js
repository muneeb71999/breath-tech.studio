export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6225a75133f9111553bbc41f',
                  title: 'Sanity Studio',
                  name: 'breath-tech-studio-studio',
                  apiId: 'e0b5a863-6ba4-49e1-b301-2cb50d287129'
                },
                {
                  buildHookId: '6225a751d9b8dfb6fbf07532',
                  title: 'Landing pages Website',
                  name: 'breath-tech-studio',
                  apiId: '8ca3f35e-c4f2-4937-b6bd-e9e42908128c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muneeb71999/breath-tech.studio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://breath-tech-studio.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
