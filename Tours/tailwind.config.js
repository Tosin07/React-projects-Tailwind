/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
],
  theme: {
    // screens:{
      
    // },
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ]},

   
   extend: {
     fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']},
    width : {
      1: '100vw',
      2: '90vw'
    },
    height : {
      1: '100vh',
      2: '90vh'
    },
    borderRadius: {
      1 : '50%'
    },
      colors: {
      transparent: 'transparent',
      black: {
        1: '#000',
       2: '#1e293b'},

      white: {
       1:'#fff',
       2: '#ffffff'
      } 
    },
    },
  
  },
    // backgroundColor : {
    //   zinc: '#f4f4f5'
    // },
    
    
  plugins: []
  
} 


// './components/**/*.{html,js}