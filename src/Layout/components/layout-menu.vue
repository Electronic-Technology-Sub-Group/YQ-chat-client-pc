<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
<script lang="ts">
import { ref, reactive, h, defineComponent } from 'vue'
import { ILayoutMenuItem } from '@/config/interface'

export default defineComponent({
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
    defaultActive: {
      type: String,
      default: '',
    },
    hoverType: {
      type: String,
      default: 'background',
    },
  },
  setup(props) {
    const menuList = reactive(props.menuList)
    const currentActive = ref(props.defaultActive)

    return () => {
      return h(
        'div',
        { class: 'flex flex-col gap-y-4 mt-[30px]' },
        {
          default: () => [
            ...menuList.map((item: ILayoutMenuItem) => {
              const isActive = currentActive.value === item.key
              const hoverClass =
                props.hoverType === 'background' && !isActive
                  ? `hover:bg-[#E9E9E9]`
                  : ''
              const activeClass = isActive ? `bg-[#E9E9E9]` : ''

              return h(
                'div',
                {
                  class: [
                    'menu-item flex items-center justify-center w-[70px] h-[80px] mx-auto rounded-lg cursor-pointer backdrop-blur-lg',
                    hoverClass,
                    activeClass,
                  ],
                  onClick: () => {
                    if (props.hoverType === 'plain') return
                    currentActive.value = item.key
                  },
                },
                {
                  default: () => [
                    h('img', { src: item.icon, class: 'w-[60%] h-[60%]' }),
                  ],
                },
              )
            }),
          ],
        },
      )
    }
  },
})
</script>
