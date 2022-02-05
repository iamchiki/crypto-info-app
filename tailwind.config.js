module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(230px, 1fr))',
        'medium-auto': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
    colors: {
      'dark-blue': '#001529',
      'light-indigo': '#6366f1',
      'light-grey': '#d3d3d3',
      white: '#fff',
    },
  },
  plugins: [],
};

// auto: 'repeat(auto-fit, minmax(230px, 1fr))',
// auto: 'repeat(auto-fit, 230px)',
