/* 
    包含n个接口请求函数的模块
    接口请求函数返回值依然是promise对象
*/
import ajax from './ajax'
// 1.根据经纬度获取位置详情
// 如何根据接口文档定义接口请求函数  ajax(参数至少传一个，最多三个)
export const reqAddress = (geohash) => ajax(`position/${geohash}`)

// 2.获取食品分类列表
export const reqFoodTypes = () => ajax(`/index_category`)

// 3.根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})

// 4.根据经纬度和关键字搜索商铺列表
export const reqAddress = (geohash) => ajax(`position/${geohash}`)
// 5.获取一次性验证码
export const reqAddress = (geohash) => ajax(`position/${geohash}`)
// 6.用户名密码登陆
export const reqAddress = (geohash) => ajax(`position/${geohash}`)
// 7.发送短信验证码
export const reqAddress = (geohash) => ajax(`position/${geohash}`)
// 8.手机号验证码登录
export const reqAddress = (geohash) => ajax(`position/${geohash}`)
// 9.根据会话获取用户信息
export const reqAddress = (geohash) => ajax(`position/${geohash}`)
// 10.用户退出
export const reqAddress = (geohash) => ajax(`position/${geohash}`)

