export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fas fa-tachometer-alt',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Posts',
    url: '/posts',
    icon: 'fas fa-newspaper',
    children: [
      {
        name: 'New Post',
        url: '/posts/new',
        icon: 'fas fa-plus'
      },
      {
        name: 'Posts',
        url: '/posts/list',
        icon: 'fas fa-list'
      },
    ]
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'fas fa-copy',
    children: [
      {
        name: 'New Page',
        url: '/pages/new',
        icon: 'fas fa-plus'
      },
      {
        name: 'Pages',
        url: '/articles/list',
        icon: 'fas fa-list'
      }
    ]
  },
  {
    name: 'Editor',
    url: '/editor',
    icon: 'fas fa-project-diagram',
    children: [
      {
        name: 'Ideas',
        url: '/editor/ideas',
        icon: 'fas fa-lightbulb'
      },
      {
        name: 'Calendar',
        url: '/editor/calendar',
        icon: 'fas fa-calendar-alt'
      },
      {
        name: 'Planner',
        url: '/posts/planner',
        icon: 'fas fa-clipboard-list'
      }
    ]
  },
  {
    name: 'Images',
    url: '/media/images',
    icon: 'fas fa-images',
    children: [
      {
        name: 'List',
        url: '/media/images',
        icon: 'fas fa-list'
      },
      {
        name: 'Upload',
        url: '/media/images/upload',
        icon: 'fas fa-upload'
      },
      {
        name: 'Sizes',
        url: '/media/images/sizes',
        icon: 'fas fa-ruler-combined'
      },
    ]
  },
  {
    name: 'Files',
    url: '/media/files',
    icon: 'fas fa-copy',
    children: [
      {
        name: 'List',
        url: '/media/files',
        icon: 'fas fa-list'
      },
      {
        name: 'Upload',
        url: '/media/files/upload',
        icon: 'fas fa-upload'
      },
    ]
  },

  // TODO: Hosting settings for Firebase Hosting including packaged templates
  // {
  //   name: 'Hosting',
  //   url: '/hosting',
  //   icon: 'fas fa-window-maximize',
  //   children: [
  //     {
  //       name: 'Theme',
  //       url: '/hosting/theme',
  //       icon: 'fas fa-tint'
  //     },
  //     {
  //       name: 'Typography',
  //       url: '/hosting/typography',
  //       icon: 'fas fa-pencil-alt'
  //     },
  //   ]
  // },
  {
    name: 'SEO',
    url: '/seo',
    icon: 'fas fa-tag',
    children: [
      {
        name: 'General',
        url: '/seo/general',
        icon: 'fas fa-cog'
      },
      {
        name: 'Tracking',
        url: '/seo/tracking',
        icon: 'fas fa-hashtag'
      },
      {
        name: 'Analytics',
        url: '/seo/analytics',
        icon: 'fas fa-chart-line'
      },
    ]
  },
  {
    name: 'Team',
    url: '/team',
    icon: 'fas fa-users',
    children: [
      {
        name: 'List',
        url: '/team/users',
        icon: 'fas fa-list'
      },
      {
        name: 'Roles',
        url: '/team/roles',
        icon: 'fas fa-user-cog'
      },
    ]
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'fas fa-cogs',
    children: [
      {
        name: 'General',
        url: '/settings/general',
        icon: 'fas fa-cog'
      },
      {
        name: 'Firebase',
        url: '/settings/firebase',
        icon: 'fas fa-cloud'
      },
      {
        name: 'Theme',
        url: '/settings/theme',
        icon: 'fas fa-tint'
      },
    ]
  },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   divider: true
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'fas fa-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'fas fa-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'fas fa-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'fas fa-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'fas fa-star'
  //     }
  //   ]
  // },
];
