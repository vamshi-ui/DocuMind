import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: 'rgb(249, 250, 251)',  // gray-50
          100: 'rgb(243, 244, 246)', // gray-100
          200: 'rgb(229, 231, 235)', // gray-200
          300: 'rgb(209, 213, 219)', // gray-300
          400: 'rgb(156, 163, 175)', // gray-400
          500: 'rgb(107, 114, 128)', // gray-500
          600: 'rgb(75, 85, 99)',    // gray-600
          700: 'rgb(55, 65, 81)',    // gray-700
          800: 'rgb(31, 41, 55)',    // gray-800
          900: 'rgb(17, 24, 39)',    // gray-900
          950: 'rgb(3, 7, 18)',      // gray-950
        },
        highlight: {
          background: 'rgb(79, 70, 229)',  // indigo-600 for primary buttons
          focusBackground: 'rgb(67, 56, 202)', // indigo-700 for focus
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        custom: {
          cardcolor: '#ffffff',
          sidebarBackground: '#f9fafb', // gray-50
          inputBackground: '#f3f4f6',   // gray-100
          borderColor: '#e5e7eb',       // gray-200
          suggestionBackground: '#f9fafb', // gray-50
          suggestionHoverBackground: '#f3f4f6', // gray-100
        },
      },
      dark: {
        primary: {
          50: 'rgb(249, 250, 251)',  // gray-50
          100: 'rgb(243, 244, 246)', // gray-100
          200: 'rgb(229, 231, 235)', // gray-200
          300: 'rgb(209, 213, 219)', // gray-300
          400: 'rgb(156, 163, 175)', // gray-400
          500: 'rgb(107, 114, 128)', // gray-500
          600: 'rgb(75, 85, 99)',    // gray-600
          700: 'rgb(55, 65, 81)',    // gray-700
          800: 'rgb(31, 41, 55)',    // gray-800
          900: 'rgb(17, 24, 39)',    // gray-900
          950: 'rgb(3, 7, 18)',      // gray-950
        },
        highlight: {
          background: 'rgb(99, 102, 241)', // indigo-500
          focusBackground: 'rgb(79, 70, 229)', // indigo-600
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        custom: {
          cardcolor: 'rgb(17, 24, 39)',  // gray-900
          sidebarBackground: '#000000', // Pure black like in the image
          mainBackground: '#0c0c0c',    // Almost black
          inputBackground: '#27272a',   // zinc-800
          borderColor: '#374151',       // gray-700
          suggestionBackground: '#1f2937', // gray-800
          suggestionHoverBackground: '#374151', // gray-700
          controlsBackground: '#1f2937', // gray-800
        },
      },
    },
  },
  components: {
    // Sidebar component styling
    sidebar: {
      colorScheme: {
        light: {
          root: {
            background: '{custom.sidebarBackground}',
            borderRight: '1px solid {custom.borderColor}',
          },
        },
        dark: {
          root: {
            background: '{custom.sidebarBackground}',
            borderRight: '1px solid {custom.borderColor}',
            color: 'rgba(255, 255, 255, 0.87)',
          },
        },
      },
    },
    // Card component styling
    card: {
      colorScheme: {
        light: {
          root: {
            background: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          },
        },
        dark: {
          root: {
            background: '{custom.cardcolor}',
            borderRadius: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    // Button component styling
    button: {
      colorScheme: {
        light: {
          root: {
            background: '{highlight.background}', // indigo-600
            color: '#ffffff',
            borderRadius: '6px',
            border: 'none',
            fontWeight: '500',
          },
          hover: {
            background: 'rgb(67, 56, 202)', // indigo-700
          },
          focus: {
            boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.4)',
          }
        },
        dark: {
          root: {
            background: '{highlight.background}', // indigo-500
            color: '#ffffff',
            borderRadius: '6px', 
            border: 'none',
            fontWeight: '500',
          },
          hover: {
            background: 'rgb(79, 70, 229)', // indigo-600
          },
          focus: {
            boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.4)',
          }
        }
      }
    },
    // Input styling 
    inputtext: {
      colorScheme: {
        light: {
          root: {
            background: '{custom.inputBackground}',
            borderRadius: '6px',
            border: '1px solid {custom.borderColor}',
          }
        },
        dark: {
          root: {
            background: '{custom.inputBackground}',
            borderRadius: '6px',
            border: '1px solid {custom.borderColor}',
            color: 'rgba(255, 255, 255, 0.87)',
          }
        }
      }
    },
    // Panel for chat controls styling
    panel: {
      colorScheme: {
        light: {
          root: {
            background: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          },
          header: {
            background: '#ffffff',
            borderBottom: '1px solid {custom.borderColor}',
          }
        },
        dark: {
          root: {
            background: '{custom.controlsBackground}',
            borderRadius: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          },
          header: {
            background: '{custom.controlsBackground}',
            borderBottom: '1px solid {custom.borderColor}',
            color: 'rgba(255, 255, 255, 0.87)',
          },
          content: {
            color: 'rgba(255, 255, 255, 0.87)'
          }
        }
      }
    },
    // Dropdown styling for settings
    dropdown: {
      colorScheme: {
        light: {
          root: {
            background: '#ffffff',
            borderRadius: '6px',
            border: '1px solid {custom.borderColor}',
          },
          panel: {
            background: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            borderRadius: '6px',
          },
        },
        dark: {
          root: {
            background: '{custom.inputBackground}',
            borderRadius: '6px',
            border: '1px solid {custom.borderColor}',
            color: 'rgba(255, 255, 255, 0.87)',
          },
          panel: {
            background: '{custom.controlsBackground}',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
            borderRadius: '6px',
          },
          item: {
            color: 'rgba(255, 255, 255, 0.87)',
          },
          hover: {
            background: '{custom.suggestionHoverBackground}',
          }
        }
      }
    },
    // For suggested prompts
    chip: {
      colorScheme: {
        light: {
          root: {
            background: '{custom.suggestionBackground}',
            borderRadius: '8px',
            color: 'rgb(55, 65, 81)', // gray-700
          }
        },
        dark: {
          root: {
            background: '{custom.suggestionBackground}',
            borderRadius: '8px',
            color: 'rgba(255, 255, 255, 0.87)',
          }
        }
      }
    },
    // Avatar (for user icon)
    avatar: {
      colorScheme: {
        light: {
          root: {
            background: 'rgb(79, 70, 229)', // indigo-600
            color: '#ffffff',
          }
        },
        dark: {
          root: {
            background: 'rgb(99, 102, 241)', // indigo-500 
            color: '#ffffff',
          }
        }
      }
    }
  },
});