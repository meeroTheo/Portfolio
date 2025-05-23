const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',   
          '"Segoe UI"',          
          'Roboto',               
          '"Helvetica Neue"',     
          'Arial',                
          'sans-serif',           
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          ...defaultTheme.fontFamily.sans, 
        ],
      },
      colors: {
      // Frontend
      'react': '#61DAFB !important',        
      'angular': '#DD0031',      
      // Backend
      'python': '#3776AB',       
      'fastapi': '#009688',      
      'nodejs': '#68A063',       
      // Databases
      'postgresql': '#336791',   
      'mongodb': '#4DB33D',       
    },
      boxShadow: {
        'custom': '0px 8px 16px rgba(0,0,0,0.05), 0px 4px 8px rgba(0,0,0,0.04)', 
      },
      borderRadius: {
        '32px': '32px',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
      },
      animation: {
        'wave': 'wave 0.8s ease-in-out',
        'scroll-text': 'scrollTextUp 15s infinite ease-in-out',
      },
      saturate: {
        '150': '1.5',
        '200': '2',
      }
    },
  },
  plugins: [],
}