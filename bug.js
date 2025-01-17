```javascript
// in your tailwind.config.js file
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], //this is wrong
  theme: {
    extend: {},
  },
  plugins: [],
};
```