// styles/variables.js
export default {

    //Defining Just Variables Globally ( inDependent)
   fontFamilly_system:'Roboto',

  // System coloring
  content: '#f0f0f0',
  content_text: '#064482',

  system: '#064482',
  system_text: 'white',
  systemii: '#937a23',
  systemii_text: '#937a23',


  system_color: '#064482',
  txtsystem_color: 'white',

  // Primary colors
  primary: '#0000e0',       // rgba(0, 0, 224, 1)
  primary_dark: '#050596',  // rgba(5, 5, 150, 1)
  
  // Secondary colors
  secondary: '#1537a7',     // (unchanged)
  secondary_dark: '#1537a7', // (unchanged)

  // Accent colors
  accent: '#cc00ff',        // (unchanged)
  accent_dark: '#cc00ff',   // (unchanged)

  // Status/flag colors
  positive: '#00ff3c',      // rgba(0, 255, 60, 1)
  positive_dark: '#00ac28', // rgba(0, 172, 40, 1)
  negative: '#ff001e',      // rgba(255, 0, 30, 1)
  negative_dark: '#c0051b', // (unchanged)
  error: '#c0051b',         // (unchanged)
  error_dark: '#b80318',    // rgba(184, 3, 24, 1)
  info: '#00d0fa',          // (unchanged)
  info_dark: '#0096b4',     // rgba(0, 150, 180, 1)
  warning: '#ffbb00',       // (unchanged)
  warning_dark: '#c79200',  // rgba(199, 146, 0, 1)

    // _____________________________Spacing
  null:0,


          //border 
          border_xxs: 1,
          border_xs: 2,
          border_sm: 3,
          border_md: 4,
          border_lg: 5,
          border_xl:6,
          
          border_wide:5,
          border_relax:3,
          border_base:2,
          border_dense:1,
          border_mini:1,
          
          //radius
          radius_xxs : 5,
          radius_xs : 10,
          radius_sm : 15,
          radius_md : 70,
          radius_lg : 30,
          radius_xl : 70,
    
          radius_wide : 50,
          radius_relax : 40,
          radius_base:2,
          radius_dense : 5,
          radius_mini : 5,
    
         //  _   padding
          p_xxs: 1,
          p_xs: 3,
          p_sm: 7,
          p_md: 10,
          p_lg: 20,
          p_xl:30,
    
          p_wide:9,
          p_relax:7,
          p_base:5,
          p_dense:3,
          p_mini:3,
    
          //  _   margine
          m_xxs: 1,
          m_xs: 3,
          m_sm: 7,
          m_md: 10,
          m_lg: 20,
          m_xl:30,
    
          m_wide:9,
          m_relax:7,
          m_base:5,
          m_dense:3,
          m_mini:3,
    
          // _ shadows ,  gaps..
          xxs: 2,
          xs: 4,
          sm: 8,
          md: 16,
          lg: 24,
          xl: 32,
          xxl: 48,
          
          wide:5,
          relax:3,
          base:2,
          dense:1,
          mini:1,
    
        //Font Specific ( size,weight,line_height) [frequentVariables ]
        // rem ( relative to rootElements fontStyle) , em ( relative to parent)
    
       //  Font size is unabled to customized ???
        fontSize_body:10,

        fontSize_xxs: 8,
        fontSize_xs: 12,
        fontSize_sm: 16,
        fontSize_md: 20,
        fontSize_lg: 24,
        fontSize_xl: 28,
        fontSize_xxl: 32,

        fontSize_mini:0.1,
        fontSize_dense:0.1,
        fontSize_base: .1,
        fontSize_relax: .1,
        fontSize_wide: .1,

        fontSize_headRate:1,
        fontSize_pRate:1,
        fontSize_sRate:0.8,
        fontSize_cRate:0.6,
        
        // weight
        fontWeight_light: '100',
        fontWeight_norma: '400',
        fontWeight_bold: '700',
        fontWeight_bolder: '900',

        fontWeight_h1: '900',
        fontWeight_h2: '800',
        fontWeight_h3: '700',
        fontWeight_h4: '600',
        fontWeight_h5: '500',
        fontWeight_h6: '400',
        fontWeight_h7: '300',
        fontWeight_h8: '200',
        fontWeight_h9: '100',
        fontWeight_h10: '50',
        fontWeight_h11: '25',
        fontWeight_h12: '10',
        
        //font lines  height
        fontLine_mini: 0.8,
        fontLine_dense: 16,
        fontLine_base: 1,
        fontLine_relax: 20,
        fontLine_wide: 24,

        fontLine_xxs: 0.8,
        fontLine_xs: 16,
        fontLine_md: 1,
        fontLine_lg: 20,
        fontLine_xl: 24,


        //sizing box
        // Base spacing unit (4px)
  space: {
    0: 0,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384
  },

  // Breakpoints (mobile-first approach)
  breakpoints: {
    mobile: 0,      // 0-767px
    tablet: 768,    // 768-1023px
    desktop: 1024   // 1024px+
  },

  // Responsive size scales
  sizes: {
    // Mobile (base)
    xs: 16,    // Extra small
    sm: 24,    // Small
    md: 32,    // Medium
    lg: 40,    // Large
    xl: 48,    // Extra large
    '2xl': 56, // 2x large
    
    // Tablet overrides
    tablet: {
      xs: 20,
      sm: 28,
      md: 36,
      lg: 44,
      xl: 52,
      '2xl': 60
    },
    
    // Desktop overrides
    desktop: {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 48,
      xl: 56,
      '2xl': 64
    }
  },

  // Container max-widths
  containers: {
    mobile: '100%',
    tablet: 720,
    desktop: 1200
  }
  }