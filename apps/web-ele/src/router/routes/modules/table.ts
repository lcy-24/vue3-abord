import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('表格集合'),
    },
    name: 'Table',
    path: '/table',
    children: [
      {
        meta: {
          title: $t('表格'),
        },
        name: 'NaiveTable',
        path: '/table',
        component: () => import('#/views/table/index.vue'),
      },
    ],
  },
];

export default routes;
