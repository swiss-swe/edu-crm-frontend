import { DIRECTOR } from '@/constants/layouts';
import {
  RT_DASHBOARD,
  RT_ADD_STAFF,
  RT_PROFILE,
  RT_STAFF_LIST,
  MT_DASHBOARD,
  MT_ADD_STAFF,
  MT_PROFILE,
  MT_STAFF_LIST,
  RT_SINGLE_STAFF,
  MT_SINGLE_STAFF
} from '@/constants/routes/director';

export default [
  {
    path: '/director',
    name: RT_DASHBOARD,
    component: () => import('@/views/Super-admin/Home.vue'),
    meta: {
      title: MT_DASHBOARD,
      layout: DIRECTOR
    }
  },
  {
    path: '/director/list-staff',
    name: RT_STAFF_LIST,
    component: () => import('@/views/Super-admin/StaffList.vue'),
    meta: {
      title: MT_STAFF_LIST,
      layout: DIRECTOR
    }
  },
  {
    path: '/director/add-staff',
    name: RT_ADD_STAFF,
    component: () => import('@/views/Super-admin/AddStaff.vue'),
    meta: {
      title: MT_ADD_STAFF,
      layout: DIRECTOR
    }
  },
  {
    path: '/user/:id',
    name: RT_SINGLE_STAFF,
    component: () => import('@/views/Super-admin/SingleStaff.vue'),
    meta: {
      title: MT_SINGLE_STAFF,
      layout: DIRECTOR
    }
  }
];
