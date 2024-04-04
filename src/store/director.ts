import { defineStore } from 'pinia';
import {
  getStaffList,
  getSingleStaff,
  addNewStaff,
  onSubmitStaffUpdateModal
} from '@/api/director';
import { successToast, errorToast } from '@/utils/toast';
import { pagination } from '@/modules/types';
import { staff } from '@/modules/interfaces';
import axios from 'axios';

import { user } from '@/modules/types';

export const useDirectorStore = defineStore('director', {
  state: () => {
    return {
      staffList: [],
      singleStaff: {},
      loading: false,
      meta: {
        total: 0
      }
    };
  },

  getters: {},

  actions: {
    async fetchStaffList(pagination: pagination) {
      this.loading = true;
      try {
        const res = await getStaffList(pagination);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;

        this.staffList = res?.data?.admins_and_teachers;
        this.meta.total = res.data.total;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
        }
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async fetchStaff(id: string | number) {
      this.loading = true;
      try {
        const res = await getSingleStaff(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleStaff = res?.data?.person;
      } catch (error) {
        this.loading = false;
        if (error instanceof Error) {
          errorToast(error.message);
        }
      } finally {
        this.loading = false;
      }
    },

    async addStaff(newStaff: staff) {
      try {
        const res = await addNewStaff(newStaff);
        if (res.status !== 201) {
          errorToast('Error occured in creating staff. Retry');
          return;
        }
        console.log(res);
        successToast('Staff succesfully added!');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            errorToast('Some field(s) is/are not valid');
            return;
          }
          errorToast(error.message);
        }
      }
    },

    async updateStaffModal(data: user) {
      try {
        const res = await onSubmitStaffUpdateModal(data);
        if (res.status !== 204) {
          errorToast('Not edited');
          return;
        }
        successToast('Staff succesfully edited!');
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    }
  }
});
