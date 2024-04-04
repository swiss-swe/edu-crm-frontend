import api from '@/plugins/axios';

const url = import.meta.env.VITE_BASE_URL; // change real api

export function getStaffList(pagination) {
  return api.get(
    url + `/find/admins-teachers?limit=${pagination.pageSize}&skip=${pagination.skip}`
  );
}

export function getSingleStaff(id) {
  return api.get(url + `/find-one/staff/${id}`);
}

export function addNewStaff(staff) {
  return api.post(url + `/add-person/`, staff);
}

export function onSubmitStaffUpdateModal(data) {
  return api.get(url + `/admins-teachers/${data.id}`, data);
}
