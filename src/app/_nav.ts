export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fas fa-tachometer-alt',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Posts',
    url: '/posts',
    icon: 'fas fa-book',
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
      }
    ]
  },
  {
    name: 'Media',
    url: '/media',
    icon: 'fas fa-images',
    children: [
      {
        name: 'Images',
        url: '/media/images',
        icon: 'fas fa-image'
      },
      {
        name: 'Files',
        url: '/media/files',
        icon: 'fas fa-copy'
      },
    ]
  },
  {
    name: 'Hosting',
    url: '/hosting',
    icon: 'fas fa-window-maximize',
    children: [
      {
        name: 'Theme',
        url: '/hosting/theme',
        icon: 'fas fa-tint'
      },
      {
        name: 'Typography',
        url: '/hosting/typography',
        icon: 'fas fa-pencil-alt'
      },
      {
        name: 'SEO',
        url: '/hosting/seo',
        icon: 'fas fa-chart-line'
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
    ]
  },
  {
    title: true,
    name: 'Components'
  },
  {
    divider: true
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'fas fa-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'fas fa-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'fas fa-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'fas fa-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'fas fa-star'
      }
    ]
  },
];
