theme: {
  extend: {
    keyframes: {
      fadeFromTop: {
        '0%': { opacity: 0, transform: 'translateY(-50px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      fadeFromBottom: {
        '0%': { opacity: 0, transform: 'translateY(50px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      slideFromRight: {
        '0%': { opacity: 0, transform: 'translateX(50px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
    },
    animation: {
      fadeFromTop: 'fadeFromTop 1s ease-out forwards',
      fadeFromBottom: 'fadeFromBottom 1s ease-out forwards',
      slideFromRight: 'slideFromRight 1s ease-out forwards',
    },
  },
},
