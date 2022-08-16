const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      screens: {
        // iphone se
        xs: '320px',
        sm: '500px',
        md: '900px',
        lg: '1280px',
      },
    },
  },
  plugins: [
    // 폼 플러그인을 활성화
    require('@tailwindcss/forms'),
    // 사용자 정의 유틸리티 클래스를 추가(https://tailwindcss.com/docs/plugins#static-utilities)
    plugin(({ addUtilities }) => {
      // 한국어에 적합한 word-break: keep-all 룰이 없으므로, 유틸리티로 추가함
      return addUtilities({
        '.break-keep-all': {
          'word-break': 'keep-all',
        },
      })
    })
  ],
}