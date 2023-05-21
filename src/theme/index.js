import _ from 'lodash'
import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import typography from './typography'
import { softShadows, strongShadows } from './shadows'

const baseOptions = {
  typography,
  overrides: {
    MuiDialogTitle: {
      root: {
        padding: '5px 24px !important',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontFamily: "'Noto Sans', serif",
      },
    },
    MuiInputAdornment: {
      positionStart: {
        marginRight: '0px !important',
      },
    },
    MuiPaper: {
      borderRadius: '0px',
      rounded: {
        borderRadius: '0px',
      },
      elevation0: {
        padding: '10px',
        borderRadius: '0px',
      },
      elevation2: {
        borderRadius: '0px',
        overflow: 'hidden',
      },
    },

    MuiTableRow: {
      root: {
        // background: "#4F2B6E",
        '& .firstChild': {
          borderRadius: '4px 0 0 4px',
        },
        '& .lastChild': {
          borderRadius: '0px 4px 4px 0px',
        },
      },
    },

    MuiSelect: {
      selectMenu: {
        height: 'auto',
        overflow: 'hidden',
        minHeight: '1.1876em',
        // color: "#ed69e5",
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
      icon: {
        color: 'white',
      },
    },
    MuiOutlinedInput: {
      input: {
        // color: "#ed69e5 !important",
        padding: '0px 14px',
        height: '48px',
      },
      root: {
        background: '#422966',
        border: '2px solid #875FBF',
        borderRadius: 8,
      },
      notchedOutline: {
        // borderColor: "rgba(255, 255, 255, 0.1)",
        background: 'transparent',
        border: 'none',
      },
    },
    MuiTableHead: {
      root: {
        color: '#fff',
        fontSize: '14px',
        fontWeight: '700',
        backgroundColor: '#E73725',
      },
    },

    MuiMenuItem: {
      root: {
        padding: '4px 5px',
        minHeight: 'auto',
      },
    },
    MuiTable: {
      root: {
        width: '100%',
        display: 'table',
        borderCollapse: 'separate',
        borderSpacing: '0 5px',
        color: '#FFFFFF',
        backgroundColor: '#F5F5F5',
      },
    },
    MuiTab: {
      wrapper: {
        // fontFamily: "'Inter'",
      },
    },
    // MuiTab: {
    //   root: {
    //     width: "1% !important",
    //   },
    // },
    MuiAvatar: {
      root: {
        borderRadius: '10px',
      },
    },
    MuiListItemIcon: {
      root: {
        width: '30px !important',
      },
    },
    MuiStep: {
      horizontal: {
        paddingLeft: '0',
        paddingRight: '0',
        marginLeft: '-22px',
      },
    },
    MuiStepLabel: {
      iconContainer: {
        display: 'flex',
        flexShrink: '0',
        paddingRight: '1px',
        paddingLeft: '1px',
        justifyContent: 'center',
      },
      label: {
        color: 'transparent !important',
        fontSize: '15px',
        fontWeight: '600',
        // fontFamily: "'Orbitron'",
        marginTop: '10px',
      },
    },
    MuiStepConnector: {
      lineHorizontal: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
      },
      line: {
        display: 'block',
        marginTop: '-2px',
        marginLeft: '-31px',
        borderColor: '#5B4AB0',
      },
    },
    MuiAccordion: {
      root: {
        // border: "1px solid #D7D5D5",
        borderRadius: '10px',
      },
    },

    MuiFormLabel: {
      root: { color: '#222' },
      colorSecondary: {
        '&.Mui-focused': {
          color: '#222',
        },
      },
    },
    MuiInputLabel: {
      outlined: { transform: 'translate(14px, 14px) scale(1)' },
    },
    MuiListSubheader: {
      root: {
        color: '#000000',
        fontSize: '22px !important',
        fontWeight: '600 !important',
        lineHeight: '33px !important',
      },
    },

    MuiOutlinedInput: {
      multiline: {
        padding: '8px',
      },
      inputMultiline: {
        padding: '8px',
      },
      root: {
        minHeight: '40px',
        borderRadius: '30px',
      },
      input: {
        zIndex: '9',
        color: '#fff',
        height: 'auto',
        padding: '13px 15px',
        borderRadius: '30px',
      },
      // notchedOutline: {
      //   background: "#422966",
      //   borderColor: "#875FBF",
      //   border: "2px solid #875FBF",
      //   borderRadius: "8px",
      // },
    },

    MuiFormHelperText: {
      root: {
        marginLeft: '8px',
        marginTop: '5px !important',
        fontFamily: "'Noto Sans', serif",
      },
    },

    MuiPopover: {
      root: {
        zIndex: 99999,
      },
    },
    MuiListItem: {
      root: {
        alignItems: 'self-start',
      },
      gutters: {
        paddingLeft: 0,
      },
    },
    MuiCheckbox: {
      root: {
        padding: '4px',
        fontSize: '12px',
      },
      colorSecondary: {},
    },
    MuiFormControlLabel: {
      root: {
        paddingBottom: '0',
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiDialog: {
      container: {
        height: '100% !important',
      },
      paperScrollPaper: {
        Width: 450,
        maxWidth: '100%',
      },

      paper: {
        overflowY: 'unset',
      },
      paperWidthSm: {
        maxWidth: '900px !important',
      },
    },
    MuiInput: {
      underline: {
        '&::before': { display: 'none' },
        '&::after': { display: 'none' },
      },
    },
    MuiBackdrop: {
      root: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: '0',
      },
    },
    MuiTypography: {
      subtitle1: {
        color: '#000',
        fontFamily: "'Noto Sans', serif",
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: ' 16px',
        colorSecondary: {
          color: '#8d8989',
        },
      },
    },
    MuiDropzoneArea: {
      root: {
        background: 'rgba(0, 0, 0, 0.1) !important',
      },
      text: {
        fontSize: '20px',
        color: '#939090',
      },
    },
    MuiPaginationItem: {
      root: {
        margin: '0px 1px !important',
      },
      outlined: {
        color: '#000',
        border: 'none',
      },
      rounded: {
        borderRadius: '6px',
        border: '1px solid #0000006e',
      },
      page: {
        '&.Mui-selected': {
          backgroundColor: '#E73725',
          color: '#fff',
        },
        ellipsis: {
          color: '#000',
        },
      },
      root: {
        backgroundColor: '#efefef',
        borderRadius: '6px',
        // "&.Mui-disabled": {
        //   background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
        // },
      },
    },
    MuiDropzoneArea: {
      root: {
        background: 'rgba(0, 0, 0, 0.1) !important',
      },
      icon: {
        color: '#4b186a',
        opacity: 0,
      },
      text: {
        color: '#939090',
        marginTop: '50px !important',
      },
    },
    MuiTabs: {
      scroller: {
        overflow: 'auto !important',
      },
    },

    MuiInputAdornment: {
      positionEnd: {
        marginLeft: '0px',
      },
    },
  },
}

const themesOptions = [
  {
    name: 'LIGHT',
    overrides: {
      MuiFormControl: {
        root: {
          boxShadow: '1px 1px 12px #E737252b',
        },
      },

      MuiButton: {
        root: {
          '&:hover': {
            backgroundColor: 'none',
          },
        },
        containedSecondary: {
          backgroundColor: '#FFFFFF',
          borderRadius: '100px',
          color: '#ff3232',
          fontSize: '14px',
          padding: '7px 19px',
          '&:hover': {
            color: '#FFFFFF',
            backgroundColor: '#ff3232',
          },
        },
        containedSizeSmall: {
          fontSize: '10px',
          fontWeight: '400',
          lineHeight: '12px',
        },
        containedPrimary: {
          backgroundColor: '#E73725',
          color: '#fff',
          borderRadius: '10px',
          whiteSpace: 'pre',
          padding: '10px 35px',
          fontWeight: '500',

          '&:hover': {
            color: '#fff',
            backgroundColor: '#ff3232 !important',
          },
        },
        contained: {
          borderRadius: '50px',
          color: '#ffffff',
          fontWeight: 600,
          padding: '5px 19px',
        },
        containedSizeLarge: {
          height: '55px',
        },
        outlinedSizeSmall: {
          padding: '6px 23px',
          fontSize: '16px',
          lineHeight: ' 24px',
        },
      },
      MuiFormControlLabel: {
        root: {
          cursor: 'pointer',
          display: 'inline-flex',

          alignItems: 'center',
          marginLeft: '-11px',
          marginRight: '16px',
          paddingBottom: '0',
          color: '#000  !important',
          verticalAlign: 'middle',
          WebkitTapHighlightColor: 'transparent',
        },
      },
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
      },

      MuiTableRow: {
        root: {
          // background: "#4F2B6E",
          '& .firstChild': {
            borderRadius: '4px 0 0 4px',
          },
          '& .lastChild': {
            borderRadius: '0px 4px 4px 0px',
          },
        },
      },

      MuiSelect: {
        selectMenu: {
          height: 'auto',
          overflow: 'hidden',
          minHeight: '1.1876em',
          // color: "#ed69e5",
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        icon: {
          color: 'white',
        },
      },
      MuiOutlinedInput: {
        input: {
          // color: "#ed69e5 !important",
          padding: '0px 14px',
          height: '48px',
        },
        root: {
          background: '#422966',
          border: '2px solid #875FBF',
          borderRadius: 8,
        },
        notchedOutline: {
          // borderColor: "rgba(255, 255, 255, 0.1)",
          border: 'none',
        },
      },
      MuiTableHead: {
        root: {
          color: '#fff',
          fontSize: '14px',
          fontWeight: '700',
          backgroundColor: '#E73725',
        },
      },
      MuiTableBody: {
        root: {
          backgroundColor: '#F5F5F5',
        },
      },
      // MuiMenuItem: {
      //   root: "0px 15px",
      // },
      MuiTable: {
        root: {
          width: '100%',
          display: 'table',
          borderCollapse: 'separate',
          borderSpacing: '0 1px',
          color: '#FFFFFF',
        },
      },
      MuiTab: {
        wrapper: {
          // fontFamily: "'Inter'",
        },
      },

      MuiAvatar: {
        root: {
          borderRadius: '10px',
        },
      },
      MuiListItemIcon: {
        root: {
          width: '30px !important',
        },
      },
      MuiStep: {
        horizontal: {
          paddingLeft: '0',
          paddingRight: '0',
          marginLeft: '-22px',
        },
      },
      MuiStepLabel: {
        iconContainer: {
          display: 'flex',
          flexShrink: '0',
          paddingRight: '1px',
          paddingLeft: '1px',
          justifyContent: 'center',
        },
        label: {
          color: 'transparent !important',
          fontSize: '15px',
          fontWeight: '600',
          // fontFamily: "'Orbitron'",
          marginTop: '10px',
        },
      },
      MuiStepConnector: {
        lineHorizontal: {
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
        },
        line: {
          display: 'block',
          marginTop: '-2px',
          marginLeft: '-31px',
          borderColor: '#5B4AB0',
        },
      },
      MuiAccordion: {
        root: {
          // border: "1px solid #D7D5D5",
          borderRadius: '10px',
        },
      },

      MuiIconButton: {
        edgeEnd: {
          zIndex: '1 !important',
        },
        root: {
          color: '#222',
          padding: '8px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiFormLabel: {
        root: { color: '#222' },
        colorSecondary: {
          '&.Mui-focused': {
            color: '#222',
          },
        },
      },
      MuiListSubheader: {
        root: {
          color: '#000000',
          fontSize: '22px !important',
          fontWeight: '600 !important',
          lineHeight: '33px !important',
        },
      },

      MuiOutlinedInput: {
        multiline: {
          padding: '8px',
        },
        inputMultiline: {
          padding: '8px',
        },
        root: {
          minHeight: '40px',
          borderRadius: '30px',
        },
        input: {
          zIndex: '9',
          color: '#222',
          height: 'auto',
          padding: '13px 15px',
          borderRadius: '30px',
        },
        notchedOutline: {
          // border: "2px solid #0000",
          // boxShadow: "0px 0px 11px #c75cd3",
          // background:
          //   "linear-gradient(96deg, #8b069e,#d06fd9) padding-box, linear-gradient(rgba(149, 219, 58, 0.7),rgba(233, 70, 255, 1)) border-box",
          // background: "#422966",
          // borderColor: "#875FBF",
          // border: "2px solid #875FBF",
          // borderRadius: "8px",
        },
        // colorSecondary: {
        //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        //     color: "#222",
        //     borderColor: "#222",
        //   },
        //   "&.Mui-focused": {
        //     color: "#222",
        //   },
        // },
      },
      MuiFormHelperText: {
        root: {
          marginLeft: '8px',
          marginTop: '5px !important',
        },
      },

      MuiPopover: {
        root: {
          zIndex: 99999,
        },
      },
      MuiListItem: {
        root: {
          alignItems: 'self-start',
        },
        gutters: {
          paddingLeft: 0,
        },
      },
      MuiCheckbox: {
        root: {
          padding: '4px',
          fontSize: '12px',
        },
        colorSecondary: {},
      },
      MuiFormControlLabel: {
        root: {
          paddingBottom: '0',
        },
      },
      MuiListItemSecondaryAction: {
        root: {
          right: 0,
        },
      },
      MuiDialog: {
        container: {
          height: '100% !important',
          outline: '0 !important',
        },
        paperScrollPaper: {
          Width: 450,
          maxWidth: '100%',
        },

        paper: {
          overflowY: 'unset',
        },
        paperWidthSm: {
          maxWidth: '900px !important',
        },
      },
      MuiInput: {
        underline: {
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
        },
      },
      MuiInputBase: {
        root: {
          minHeight: '45px',
          background: '#fff',
          borderRadius: '8px',
          background: 'transparent',
          // border: "1px solid #000",
        },

        input: {
          fontSize: 13,
          // color: "#dddbdb",
          // height: "0.1876em",
          padding: '6px 16px 7px',
          '&:-webkit-autofill': {
            WebkitBackgroundClip: 'text !important',
            WebkitTextFillColor: '#222 !important',
          },
        },
      },
      MuiBackdrop: {
        root: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
      },

      MuiDrawer: {
        paperAnchorDockedLeft: {
          borderRight: '0',
        },
      },
      MuiTypography: {
        body2: {
          color: '#000',
        },

        subtitle1: {
          color: '#fff',
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: ' 16px',
          colorSecondary: {
            color: '#8d8989',
          },
        },
      },
      MuiDropzoneArea: {
        root: {
          background: 'rgba(0, 0, 0, 0.1) !important',
        },
        text: {
          fontSize: '20px',
          color: '#939090',
        },
      },
      MuiTableCell: {
        root: {
          border: 'none !important',
          padding: '8px',
          color: '#fff',
          fontWeight: '500',
          fontSize: '12px',
          textAlign: 'center',
        },
        head: {
          color: '#fff',
          fontSize: '12px',
          fontWeight: '500',
        },
      },
      MuiPaginationItem: {
        root: {
          margin: '0 1px',
        },
        outlined: {
          color: '#000',
          border: 'none',
        },
        rounded: {
          borderRadius: '6px',
          border: '1px solid #0000006e',
        },
        ellipsis: {
          color: '#000',
        },
        page: {
          '&.Mui-selected': {
            backgroundColor: '#E73725',
            color: '#fff',
          },
        },
        root: {
          backgroundColor: '#efefef',
          borderRadius: '6px',
          // "&.Mui-disabled": {
          //   background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
          // },
        },
      },
      MuiDropzoneArea: {
        root: {
          background: 'rgba(0, 0, 0, 0.1) !important',
        },
        icon: {
          color: '#4b186a',
          opacity: 0,
        },
        text: {
          color: '#939090',
          marginTop: '50px !important',
        },
      },
      MuiTabs: {
        scroller: {
          overflow: 'auto !important',
        },
      },

      MuiInputAdornment: {
        positionEnd: {
          marginLeft: '0px',
        },
      },
    },
    typography: {
      fontFamily: "'IBM Plex Serif', serif",
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: '#F5F5F5',
        paper: '#FFFFFF',
        sliderbottom: '#E73725',
      },
      primary: {
        main: '#000000',
        default: '#000000',
        top: '#000',
      },
      secondary: {
        main: '#000',
        default: '#898787',
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
    shadows: softShadows,
  },
  {
    name: 'DARK',
    overrides: {
      MuiFormControlLabel: {
        root: {
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '-11px',
          marginRight: '16px',
          paddingBottom: '0',
          color: '#FFFFFF !important',
          verticalAlign: 'middle',
          WebkitTapHighlightColor: 'transparent',
        },
      },

      MuiAppBar: {
        colorPrimary: {
          backgroundColor: '#fff',
          color: '#AFAFAF',
        },
      },
      MuiButton: {
        root: {
          '&:hover': {
            backgroundColor: 'none',
          },
        },
        containedSecondary: {
          backgroundColor: '#1C1B1D',
          borderRadius: '100px',
          color: '#ff3232',
          fontSize: '14px',
          padding: '7px 19px',
          '&:hover': {
            color: '#1C1B1D',
            backgroundColor: '#ff3232',
          },
        },
        containedSizeSmall: {
          fontSize: '10px',
          fontWeight: '400',
          lineHeight: '12px',
        },
        containedPrimary: {
          backgroundColor: '#E73725',
          color: '#fff',
          borderRadius: '10px',
          whiteSpace: 'pre',
          padding: '10px 35px',
          fontWeight: '500',

          '&:hover': {
            color: '#fff',
            backgroundColor: '#ff3232 !important',
          },
        },
        contained: {
          borderRadius: '50px',
          color: '#ffffff',
          fontWeight: 600,
          padding: '5px 19px',
        },
        containedSizeLarge: {
          height: '55px',
        },
        outlinedSizeSmall: {
          padding: '6px 23px',
          fontSize: '16px',
          lineHeight: ' 24px',
        },
      },

      MuiTableRow: {
        root: {
          // background: "#4F2B6E",
          '& .firstChild': {
            borderRadius: '4px 0 0 4px',
          },
          '& .lastChild': {
            borderRadius: '0px 4px 4px 0px',
          },
        },
      },

      MuiSelect: {
        selectMenu: {
          height: 'auto',
          overflow: 'hidden',
          minHeight: '1.1876em',
          // color: "#ed69e5",
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        icon: {
          color: 'white',
        },
      },
      MuiOutlinedInput: {
        input: {
          color: '#ed69e5 !important',
          padding: '0px 14px',
          height: '48px',
        },
        root: {
          background: '#422966',
          border: '2px solid #875FBF',
          borderRadius: 8,
        },
        notchedOutline: {
          // borderColor: "rgba(255, 255, 255, 0.1)",
          border: 'none',
        },
      },
      MuiTableHead: {
        root: {
          color: '#fff',
          fontSize: '14px',
          fontWeight: '700',
          backgroundColor: '#E73725',
        },
      },
      MuiTableBody: {
        root: {
          backgroundColor: '#2E2D30',
        },
      },
      // MuiMenuItem: {
      //   root: "0px 15px",
      // },
      MuiTable: {
        root: {
          width: '100%',
          display: 'table',
          borderCollapse: 'separate',
          borderSpacing: '0 1px',
          color: '#FFFFFF',
        },
      },
      MuiTab: {
        wrapper: {
          // fontFamily: "'Inter'",
        },
      },
      // MuiTab: {
      //   root: {
      //     width: "1% !important",
      //   },
      // },
      MuiAvatar: {
        root: {
          borderRadius: '10px',
        },
      },
      MuiListItemIcon: {
        root: {
          width: '30px !important',
        },
      },
      MuiStep: {
        horizontal: {
          paddingLeft: '0',
          paddingRight: '0',
          marginLeft: '-22px',
        },
      },
      MuiStepLabel: {
        iconContainer: {
          display: 'flex',
          flexShrink: '0',
          paddingRight: '1px',
          paddingLeft: '1px',
          justifyContent: 'center',
        },
        label: {
          color: 'transparent !important',
          fontSize: '15px',
          fontWeight: '600',
          // fontFamily: "'Orbitron'",
          marginTop: '10px',
        },
      },
      MuiStepConnector: {
        lineHorizontal: {
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
        },
        line: {
          display: 'block',
          marginTop: '-2px',
          marginLeft: '-31px',
          borderColor: '#5B4AB0',
        },
      },
      MuiAccordion: {
        root: {
          // border: "1px solid #D7D5D5",
          borderRadius: '10px',
        },
      },

      MuiIconButton: {
        edgeEnd: {
          zIndex: '1 !important',
        },
        root: {
          color: '#fff',
          padding: '8px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiFormLabel: {
        root: { color: '#fff' },
        colorSecondary: {
          '&.Mui-focused': {
            color: '#ddd',
          },
        },
      },
      MuiListSubheader: {
        root: {
          color: '#000000',
          fontSize: '22px !important',
          fontWeight: '600 !important',
          lineHeight: '33px !important',
        },
      },

      MuiOutlinedInput: {
        multiline: {
          padding: '8px',
        },
        inputMultiline: {
          padding: '8px',
        },
        root: {
          minHeight: '40px',
          borderRadius: '30px',
        },
        input: {
          zIndex: '9',
          color: '#fff',
          height: 'auto',
          padding: '13px 15px',
          borderRadius: '30px',
        },
        notchedOutline: {
          background: 'transparent',
          // background: "#422966",
          // borderColor: "#875FBF",
          // border: "2px solid #875FBF",
          // borderRadius: "8px",
        },
      },
      MuiFormHelperText: {
        root: {
          marginLeft: '8px',
          marginTop: '5px !important',
        },
      },

      MuiPopover: {
        root: {
          zIndex: 99999,
        },
      },
      MuiListItem: {
        root: {
          alignItems: 'self-start',
        },
        gutters: {
          paddingLeft: 0,
        },
      },
      MuiCheckbox: {
        root: {
          padding: '4px',
          fontSize: '12px',
        },
        colorSecondary: {},
      },
      MuiFormControlLabel: {
        root: {
          paddingBottom: '0',
        },
      },
      MuiListItemSecondaryAction: {
        root: {
          right: 0,
        },
      },
      MuiDialog: {
        paperScrollPaper: {
          Width: 450,
          maxWidth: '100%',
        },

        paper: {
          overflowY: 'unset',
        },
        paperWidthSm: {
          maxWidth: '900px !important',
        },
      },
      MuiInput: {
        underline: {
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
        },
      },
      MuiInputBase: {
        root: {
          minHeight: '45px',
          background: '#222',
          borderRadius: '8px',
          background: '#0f0f0f',
          // border: "1px solid #000",
        },
        input: {
          fontSize: 14,
          // color: "#dddbdb",
          // height: "0.1876em",
          padding: '6px 16px 7px',
          '&:-webkit-autofill': {
            WebkitBackgroundClip: 'text !important',
            WebkitTextFillColor: '#fff !important',
          },
        },
      },
      MuiBackdrop: {
        root: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
      },

      MuiDrawer: {
        paperAnchorDockedLeft: {
          borderRight: '0',
        },
      },
      MuiTypography: {
        subtitle1: {
          color: '#fff',
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: ' 16px',
          colorSecondary: {
            color: '#8d8989',
          },
        },
      },
      MuiDropzoneArea: {
        root: {
          background: 'rgba(0, 0, 0, 0.1) !important',
        },
        text: {
          fontSize: '20px',
          color: '#939090',
        },
      },
      MuiTableCell: {
        root: {
          border: 'none !important',
          padding: '8px',
          color: 'rgba(177, 177, 177, 1)',
          fontWeight: '500',
          fontSize: '12px',
          textAlign: 'center',
        },
        head: {
          color: '#fff',
          fontSize: '12px',
          fontWeight: '500',
        },
      },
      MuiPaginationItem: {
        root: {
          margin: '0px 1px !important',
        },
        outlined: {
          color: '#fff',
          border: 'none',
        },
        rounded: {
          borderRadius: '6px',
          border: '1px solid #0000006e',
        },
        page: {
          '&.Mui-selected': {
            backgroundColor: '#E73725',
            color: '#fff',
          },
        },
        ellipsis: {
          color: '#fff',
        },
        root: {
          backgroundColor: '#2E2D30',
          borderRadius: '6px',
          // "&.Mui-disabled": {
          //   background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
          // },
        },
      },
      MuiDropzoneArea: {
        root: {
          background: 'rgba(0, 0, 0, 0.1) !important',
        },
        icon: {
          color: '#4b186a',
          opacity: 0,
        },
        text: {
          color: '#939090',
          marginTop: '50px !important',
        },
      },
      MuiTabs: {
        scroller: {
          overflow: 'auto !important',
        },
      },

      MuiInputAdornment: {
        positionEnd: {
          marginLeft: '0px',
        },
      },
    },
    typography: {
      fontFamily: "'IBM Plex Serif', serif",
    },
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#010000',
        paper: '#1C1B1D',
        sliderbottom: '#E73725',
      },
      primary: {
        main: '#FFFFFF',
        default: '#AFAFAF',
        top: '#fff',
      },
      secondary: {
        main: '#CBCBCB',
        default: '#898787',
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
      },
    },
    shadows: strongShadows,
  },
]

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme)

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`))
    ;[themeOptions] = themesOptions
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction }),
  )

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
