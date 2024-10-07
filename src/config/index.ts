/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import { ILayoutMenuItem } from './interface'

export const ChatMenuList: ILayoutMenuItem[] = [
  {
    key: 'chat',
    path: '/chat',
    icon: '/src/assets/chat.svg',
  },
  {
    key: 'user',
    path: '/user',
    icon: '/src/assets/user.svg',
  },
  {
    key: 'dynamic',
    path: '/dynamic',
    icon: '/src/assets/dynamic.svg',
  },
]

export const ConfigMenuList: ILayoutMenuItem[] = [
  {
    key: 'email',
    path: '/email',
    icon: '/src/assets/email.svg',
  },
  {
    key: 'file',
    path: '/file',
    icon: '/src/assets/file.svg',
  },
  {
    key: 'favorite',
    path: '/favorite',
    icon: '/src/assets/favorite.svg',
  },
  {
    key: 'setting',
    path: '/setting',
    icon: '/src/assets/setting.svg',
  },
]
