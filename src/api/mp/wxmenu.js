/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

import request from '@/router/axios'

export function getObj(id) {
  return request({
    url: '/mp/wxmenu/' + id,
    method: 'get'
  })
}

export function putObj(appId) {
  return request({
    url: '/mp/wxmenu/' + appId,
    method: 'put'
  })
}

export function delObj(appId) {
  return request({
    url: '/mp/wxmenu/' + appId,
    method: 'delete'
  })
}

export function addObj(appId, obj) {
  return request({
    url: '/mp/wxmenu/' + appId,
    method: 'post',
    data: obj
  })
}
