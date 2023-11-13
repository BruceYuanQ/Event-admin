import { createPinia } from 'pinia'
//pinia持久化插件
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia
//由 stores/index.js 统一导出，导入路径统一 `./stores`，而且仓库维护在 stores/modules 中
export * from './modules/user'
