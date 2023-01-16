import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const myCustomTheme = {
  colors: {
    primary: '#702C7E',
    secondary: '#C4296C',
    warning: '#F4BA46',
    disabled: '#EFEFEF',
    info: '#0083B6',
    danger: '#DF3F3E',
    action: '#ED732E',
    customYellow: '#FFFF00',
    background: '#1e1e1e'
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    }
  },
  icons: {
    defaultSet: 'mdi',
  },
})