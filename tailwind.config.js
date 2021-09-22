module.exports = {
  purge: {
    enabled: true,
    content: ['./docs/typed.js',
              './docs/index.html',],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-super-slow': 'spin 1300s ease infinite',
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'gradient-x':'gradient-x 9s ease infinite',
        'gradient-y':'gradient-y 9s ease infinite',
        'gradient-xy':'gradient-xy 9s ease infinite',
       },
       'keyframes': {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            }
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        }
      },
      fontFamily: {
        'syne':['Syne'],
        'monserrat':['Montserrat'],
       },
       spacing: {
        nav: '67px',
        navP: '32px',
        html: '75%',
        css: '50%',
        js: '20%',
        tailwindcss: '50%',
        figma: '30%',
        ps: '60%',
        ae: '40%',
       },
       colors: {
        primary: '#0D0D0D',
        secondary:'#00072b',
        navA: '#00FFFF',//nav bar gradient cyan
        navB: '#FF00FF',//nav bar gradient fuschia
        neonG: '#00ff28'
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      rotate: ['active', 'group-hover'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
