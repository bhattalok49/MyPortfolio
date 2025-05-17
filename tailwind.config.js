/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slack: {
          purple: '#4A154B', // Slack primary purple
          blue: '#36C5F0',   // Slack blue
          green: '#2EB67D',  // Slack green
          yellow: '#ECB22E', // Slack yellow
          red: '#E01E5A',    // Slack red
        },
        dark: {
          primary: '#1A1D21',
          secondary: '#222529',
          accent: '#2C2D30',
          text: '#D1D2D3',
          muted: '#8D8E8F',
          border: '#565856',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F8F8F8',
          accent: '#EEEEEE',
          text: '#1D1C1D',
          muted: '#616061',
          border: '#DDDDDD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'typing': 'typing 1.2s steps(20, end)',
        'blink': 'blink 0.5s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      },
    },
  },
  plugins: [],
};