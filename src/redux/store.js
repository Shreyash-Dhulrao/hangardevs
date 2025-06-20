import { configureStore } from '@reduxjs/toolkit'
import themeMode from '../features/theme/themeMode'

export default configureStore({
  reducer: {
    theme: themeMode
  }
})