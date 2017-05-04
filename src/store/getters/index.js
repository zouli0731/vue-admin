/**
 *
 * @Date: 2017/3/21 16:04
 *
 */

import * as type from 'store/getters/type'

export default {
  //获取用户信息
  [type.GET_USER_INFO]: state => {
    return state.user_info
  }
}
