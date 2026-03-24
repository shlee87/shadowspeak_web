import type { RouteRecord } from 'vite-react-ssg'
import App from './App'

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        lazy: () => import('./pages/Landing'),
      },
      {
        path: 'privacy',
        lazy: () => import('./pages/Privacy'),
      },
      {
        path: 'blog',
        lazy: () => import('./pages/BlogListing'),
      },
      {
        path: 'blog/:slug',
        lazy: () => import('./pages/BlogPost'),
        getStaticPaths: () => [
          'blog/pronunciation-vs-delivery',
          'blog/four-axes-of-delivery',
          'blog/podcast-shadowing-guide',
        ],
      },
      {
        path: 'vs/:competitor',
        lazy: () => import('./pages/ComparisonPage'),
        getStaticPaths: () => [
          'vs/elsa-speak',
          'vs/duolingo',
          'vs/best-podcast-app',
        ],
      },
    ],
  },
]
