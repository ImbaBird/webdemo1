import request from "@/utils/request"

//首页登录
export function apilogin(code) {
  return request({
    url: '/index?code=' + code,
    method: 'get',
    // params:code
  })
}

//电费
export function apieleclist(params) {
  return request({
    url: '/mobile/electric_cost',
    method: 'get',
    params: params
  })
}


//水费
export function apiwaterlist(params) {
  return request({
    url: '/mobile/water_cost',
    method: 'get',
    params: params
  })
}

// 其他费用
export function apiotherlist(params) {
  return request({
    url: '/mobile/other_cost',
    method: 'get',
    params: params
  })
}

//报修类型下拉
export function apirepairtypelist(params) {
  return request({
    url: '/get/repair/type',
    method: 'get',
    params: params
  })
}

// 宿舍报修登记
export function apiroomrepairsave(data) {
  return request({
    url: "/mobile/room_reg",
    method: 'post',
    data: data
  })
}

//后勤区域列表
export function apiarealist() {
  return request({
    url: "/get/repair/area",
    method: 'get',
  })
}

// 宿舍报修登记
export function apilogisticsrepairsave(data) {
  return request({
    url: "/mobile/logistics_reg",
    method: 'post',
    data: data
  })
}

// 我的报修记录
export function apirepair_list(params) {
  return request({
    url: "/mobile/my_room_repair/record",
    method: "get",
    params: params
  })
}

//待处理列表
export function apiwaitlist() {
  return request({
    url: "/mobile/get/wait_me/maintain/list",
    method: "get"
  })
}

//报修处理外修渲染信息
export function apioutsideinfo(params) {
  return request({
    url: "/mobile/get/wait_me/maintain/detail",
    method: "get",
    params: params
  })
}

//报修外修
export function apioutsidesave(data) {
  return request({
    url: "/mobile/repair/maintain/submit",
    method: "post",
    data: data
  })
}

// 维修历史记录
export function apialreadyrepairlist(params) {
  return request({
    url: "/mobile/get/wait_me/logs/list",
    method: 'get',
    params: params
  })
}

//卫生检查历史记录
export function apicheckhistorylist(params) {
  return request({
    url: "/mobile/sanitation_check/record",
    method: 'get',
    params: params
  })
}

// 物料名称搜索
export function apigoodssearch(params) {
  return request({
    url: "/mobile/mate/select",
    method: "get",
    params: params
  })
}

//卫生检查房间号
export function getfloor_rooms_list(params) {
  return request({
    url: "/mobile/check_in/ffloor_name",
    method: "get",
    params: params
  })
}

//卫生检查带人员数据
export function get_room_users_list(params) {
  return request({
    url: "/mobile/get_person_list2",
    method: "get",
    params: params
  })
}

//待处理内修提交

export function apiinsidesave(data) {
  return request({
    url: "/mobile/repair/fin/maintain/submit",
    method: "post",
    data: data
  })

}

// 管理员检查记录
export function apiadminchecklist(params) {
  return request({
    url: "/mobile/sanitation_check/rank",
    method: "get",
    params: params
  })
}

//卫生检查登记
export function apichecksave(data) {
  return request({
    url: "/mobile/sanitation_check/submit",
    method: 'post',
    data: data
  })
}

// 卫生检查类型
export function apichecktypelist() {
  return request({
    url: "/mobile/check/type",
    method: 'get'
  })
}

//首页选择地区
export function apigetplace() {
  return request({
    url: "/api/mobile/get_area",
    method: 'get'
  })
}

//首页地区保存
export function apiplacesave(data) {
  return request({
    url: "/api/mobile/update/person_area",
    method: 'post',
    data: data
  })
}


//宿舍维修待分配
export function apiwaitdistributelist() {
  return request({
    url: "/pc/repair/dorm/list",
    method: 'get',
  })
}

//后勤维修待分配
export function apiwaitdistribute_hqlist() {
  return request({
    url: "/pc/repair/logistics/list",
    method: 'get',
  })
}

export function apidorminfo(params) {
  return request({
    url: "/pc/goto/room_repair_info",
    method: 'get',
    params: params
  })
}

export function apigetrepair_person(params) {
  return request({
    url: "/get/repair/user/list",
    method: 'get',
    params: params
  })
}

export function apidistributesave(data) {
  return request({
    url: "/mobile/fin/out/repair",
    method: 'post',
    data: data
  })
}

export function apilogisticsinfo(params) {
  return request({
    url: "/pc/goto/logistics_repair_info",
    method: 'get',
    params: params
  })
}
