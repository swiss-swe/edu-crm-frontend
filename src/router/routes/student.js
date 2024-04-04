import { STUDENT } from '@/constants/layouts';
import {
  RT_PROFILE,
  RT_LESSONS,
  MT_PROFILE,
  MT_LESSONS,
  RT_SINGLE_LESSON,
  MT_SINGLE_LESSON
} from '@/constants/routes/student';

export default [
  {
    path: '/student',
    name: RT_LESSONS,
    component: () => import('@/views/Student/Lessons.vue'),
    meta: {
      layout: STUDENT,
      title: MT_LESSONS
    }
  },
  {
    path: '/student/profile',
    name: RT_PROFILE,
    component: () => import('@/views/Student/Home.vue'),
    meta: {
      title: 'Students',
      layout: STUDENT
    }
  },
  {
    path: '/student/lesson/:id',
    name: RT_SINGLE_LESSON,
    component: () => import('@/views/Student/Lesson.vue'),
    meta: {
      title: MT_SINGLE_LESSON,
      layout: STUDENT
    }
  }
];
