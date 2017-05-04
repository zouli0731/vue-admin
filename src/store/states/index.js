/**
 *
 * @Date: 2017/3/21 16:04
 *
 */

import {cookieStorage} from 'common/storage'

export default {
  //用户信息和是否登录
  user_info: cookieStorage.get('user_info')
}
