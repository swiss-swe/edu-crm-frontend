import { ADMIN } from '@/constants/layouts';

import {
  RT_ROOM,
  RT_ADMIN,
  RT_TEACHER,
  RT_STUDENT,
  MT_ADMIN,
  MT_ROOM,
  MT_TEACHER,
  MT_STUDENT,
  RT_LESSON,
  MT_LESSON,
  RT_GROUP,
  MT_GROUP,
  RT_COURSE,
  MT_COURSE,
  RT_SINGLE_STUDENT
} from '@/constants/routes/admin';

export default [
  {
    path: '/admin/rooms',
    name: RT_ROOM,
    component: () => import('@/views/Admin/Rooms.vue'),
    meta: {
      layout: ADMIN,
      title: MT_ROOM
    }
  },
  {
    path: '/courses',
    name: RT_COURSE,
    component: () => import('@/views/Admin/Course.vue'),
    meta: {
      layout: ADMIN,
      title: MT_COURSE
    }
  },

  {
    path: '/admin/student/:id',
    name: RT_SINGLE_STUDENT,
    component: () => import('@/views/Admin/SingleStudent.vue'),
    meta: {
      layout: ADMIN,
      title: MT_STUDENT
    }
  },

  {
    path: '/admin/home',
    name: RT_ADMIN,
    component: () => import('@/views/Admin/Home.vue'),
    meta: {
      layout: ADMIN,
      title: MT_ADMIN
    }
  },
  {
    path: '/admin/teachers',
    name: RT_TEACHER,
    component: () => import('@/views/Admin/Teachers.vue'),
    meta: {
      layout: ADMIN,
      title: MT_TEACHER
    }
  },
  {
    path: '/admin/students',
    name: RT_STUDENT,
    component: () => import('@/views/Admin/Students.vue'),
    meta: {
      layout: ADMIN,
      title: MT_STUDENT
    }
  },
  {
    path: '/admin/group',
    name: RT_GROUP,
    component: () => import('@/views/Admin/Groups.vue'),
    meta: {
      layout: ADMIN,
      title: MT_GROUP
    }
  },
  {
    path: '/admin',
    name: RT_COURSE,
    component: () => import('@/views/Admin/Course.vue'),
    meta: {
      layout: ADMIN,
      title: MT_COURSE
    }
  },
  {
    path: '/lesson',
    name: RT_LESSON,
    component: () => import('@/views/Admin/Lesson.vue'),
    meta: {
      title: MT_LESSON,
      layout: ADMIN
    }
  }
];
