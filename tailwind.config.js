/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage:{
          'wave-bg':"url(../src/assets/img/bg/bg-2.svg)",
          'wave2-bg':"url(../src/assets/img/bg/bg-4.svg)",
        },
        padding:{
          '6vw':'6vw',
          '3vw':'3vw'
        },
        spacing:{
          '8vw':'8vw',
          '20%':"20%",
          '12%':"12%"
        },
        fontFamily:{
            'Header':['Inter-Bold'],
            'Subheader':['Inter-SemiBold'],
            'Regular':['Inter-Regular']
        },
        fontSize:{
            '0.9':'.9rem',
            '0.8':'.8rem'
        },
        colors:{
            'Red-Darken':"#94080D",
            'Red-Rose':"#D00412",
            'bg-2':"#F0F8FF",
            'grey-2':"#F5F5F5"
        },
        boxShadow:{
          'card1':"10px 10px 6px -3px rgba(128,0,0,0.75)",
          'card2':"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
        },
        borderWidth:{
          "1":"1px"
        },
        screens:{
          'xm':{
              'max':'639px'
          },
          'sm': {'min': '0px', 'max': '767px'},
          // => @media (min-width: 640px and max-width: 767px) { ... }
    
          'md': {'min': '768px', 'max': '1023px'},
          // => @media (min-width: 768px and max-width: 1023px) { ... }
    
          'lg': {'min': '1024px', 'max': '1279px'},
          // => @media (min-width: 1024px and max-width: 1279px) { ... }
    
          'xl': {'min': '1280px', 'max': '1535px'},
          // => @media (min-width: 1280px and max-width: 1535px) { ... }
    
          '2xl': {'min': '1536px'},
        }

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

