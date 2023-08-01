// https://tailwindcss.com/docs/configuration
module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  safelist: [
    'bg-yellow-100',
    'bg-yellow-200',
    'bg-indigo-100',
    'bg-blue-100',
    'bg-stone-200',
    'dark',
    'w-1/2',
    'w-1/3',
    'w-1/4',
    'w-1/5',
    'w-1/6',
    'container',
    'w-full',
    { pattern: /items-start/, variants: ['lg'] },
    { pattern: /items-center/, variants: ['lg'] },
    { pattern: /items-end/, variants: ['lg'] },
    { pattern: /justify-start/, variants: ['lg'] },
    { pattern: /justify-center/, variants: ['lg'] },
    { pattern: /justify-end/, variants: ['lg'] },
    { pattern: /grid/, variants: ['lg'] },

    { pattern: /^rounded(\w?)-/ },

    { pattern: /^p(\w?)-/, variants: ['lg'] },
    { pattern: /^pl(\w?)-/, variants: ['lg'] },
    { pattern: /^pr(\w?)-/, variants: ['lg'] },
    { pattern: /^pt(\w?)-/, variants: ['lg'] },
    { pattern: /^pb(\w?)-/, variants: ['lg'] },

    { pattern: /^\-?m(\w?)-/, variants: ['lg'] },
    { pattern: /^ml(\w?)-/, variants: ['lg'] },
    { pattern: /^mr(\w?)-/, variants: ['lg'] },
    { pattern: /^mt(\w?)-/, variants: ['lg'] },
    { pattern: /^mb(\w?)-/, variants: ['lg'] },

    { pattern: /^max-w(\w?)-/ },
    { pattern: /^gap(\w?)-/, variants: ['lg'] },
    { pattern: /^col-span(\w?)-/, variants: ['lg'] },
    { pattern: /^grid-cols(\w?)-/, variants: ['lg'] },
    { pattern: /^grid-row(\w?)-/, variants: ['lg'] },
  ],
  theme: {
    extend: {
      colors: {
        'ecc-blue': '#2F318D',
        'ecc-yellow': '#FDF251',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
      },
      gap: {
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
      },
      padding: {
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
      },
      margin: {
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
      center: true,
    },
    fontFamily: {
      primary: ['open sans'],
      secondary: ['barlow'],
    },
  },
  plugins: [],
};
