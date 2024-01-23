// craco.config.js
export const style = {
  postcss: {
    // eslint-disable-next-line no-undef
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
