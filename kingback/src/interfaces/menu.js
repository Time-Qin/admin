/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                神兽保佑            永无BUG
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-07-26 16:43:22
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const express = require('express');
const router = express.Router();

router.get('/api1/menus',(req,res)=>{
    const query = req.query;
    const childs = [
      {
        name: 'testList',
        title: '列表',
      },
      {
        name: 'testAdd',
        title: '添加',
      },
      {
        name: 'testEdit',
        title: '编辑',
      },
      {
        name: 'testAuth',
        title: '权限测试',
      },
      {
        name: 'test-cache',
        title: '该页面可缓存',
      },
      {
        name: 'test-no-cache',
        title: '该页面不可缓存',
      },
      {
        name: 'nest',
        title: '二级菜单',
        children: [
          {
            name: 'nestPage1',
            title: 'page1',
          },
          {
            name: 'nestPage2',
            title: 'page2',
          },
        ],
      },
      {
        name: 'test-error-log',
        title: '测试错误日志',
      },
    ]
    if (query.role === 'admin')
        childs.push({
          name: 'testNoAuth',
          title: '权限页面',
        });

      res.json({
        code: 200,
        message: '获取菜单成功',
        data: [
          {
            name: 'test',
            title: '测试页面',
            children: childs,
          },
        ],
      });
})

module.exports = router;