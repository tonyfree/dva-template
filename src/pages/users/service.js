import request from '@utils/request'
import config from '@utils/config'

const { api } = config

export function fetch(params) {
  return request({
    url: api.lists,
    method: 'get',
    data: params
  });
}

export function remove(params) {
  return request({
    url: api.remove,
    method: 'delete',
    data: params
  });
}

export function patch(params) {
  return request({
    url: api.update,
    method: 'patch',
    data: params
  });
}

export function create(params) {
  return request({
    url: api.add,
    method: 'post',
    data: params
  });
}
