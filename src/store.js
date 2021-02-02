import { store } from '@risingstack/react-easy-state'

const state = store({
  activeMenu: false,
  items: [
    { value: "Dashboard", href: '/dashboard', active: false },
    { value: 'Profile', href: '/profile', active: false },
    { value: 'Settings', href: '/settings', active: false },
  ]
})

export default state