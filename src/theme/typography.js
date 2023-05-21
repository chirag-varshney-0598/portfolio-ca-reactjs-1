import shadows from '@material-ui/core/styles/shadows'

export default {
  h1: {
    fontWeight: 800,
    fontSize: 50,
    fontFamily: "'Noto Sans', serif",

    '@media(max-width:1024px)': {
      fontSize: '34px !important',
    },
    // "@media(max-width:767px)": {
    //   fontSize: "25px !important",
    // },
  },
  h2: {
    fontSize: 40,
    fontWeight: 800,
    fontFamily: "'Noto Sans', serif",
    wordBreak: 'break-word',
    '@media(max-width:1024px)': {
      fontSize: '27px !important',
    },
    '@media(max-width:767px)': {
      fontSize: '25px !important',
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: 35,
    fontFamily: "'Noto Sans', serif",
    wordBreak: 'break-word',
    '@media(max-width:767px)': {
      fontSize: '27px',
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: 28,
    fontFamily: "'Noto Sans, serif",
    wordBreak: 'break-word',
    '@media(max-width:767px)': {
      fontSize: '20px',
    },
  },
  h5: {
    fontWeight: 400,
    fontSize: 18,
    fontFamily: "'Noto Sans', serif",
    wordBreak: 'break-word',
    '@media(max-width:1280px)': {
      fontSize: '14px',
      lineHeight: '19px',
    },
    '@media(max-width:767px)': {
      fontSize: '12px',
    },
  },
  h6: {
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "'Noto Sans', serif",

    color: '#ff3232',
    '@media(max-width:767px)': {
      fontSize: '12px',
      lineHeight: '19px',
    },
  },

  body1: {
    fontSize: '12px',
    fontFamily: "'Noto Sans', serif",
    fontWeight: '300',
    lineHeight: '25px',

    '@media(max-width:767px)': {
      fontSize: '11px !important',
      lineHeight: '17px',
    },
  },
  body2: {
    fontSize: '15px',
    fontFamily: "'Noto Sans', serif",
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.72px',
    color: '#000',
    '@media(max-width:767px)': {
      fontSize: '12px !important',
      lineHeight: '18px !important',
    },
  },

  overline: {
    fontWeight: 500,
  },
  button: {
    textTransform: 'capitalize',
    borderRadius: 27,
    fontFamily: "'Noto Sans', serif",
  },
}
