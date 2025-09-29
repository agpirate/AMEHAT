import { StyleSheet } from 'react-native';
 
  /* border radius---- [ allSide ] [ size(flat-circle) ] [ noEvent] */
  export const radiusStyles = (theme) => StyleSheet.create({
    radius_flat: {
      borderRadius: theme.radius_flat || 0
    },
    radius_xxs: {
      borderRadius: theme.radius_xxs
    },
    radius_xs: {
      borderRadius: theme.radius_xs
    },
    radius_sm: {
      borderRadius: theme.radius_sm
    },
    radius_md: {
      borderRadius: theme.radius_md
    },
    radius_lg: {
      borderRadius: theme.radius_lg
    },
    radius_xl: {
      borderRadius: theme.radius_xl
    },
    radius_p50: {
      borderRadius: theme.radius_p50
    },
    // Circular radius (50%)
    radius_circle: {
      borderRadius: theme.radius_circle || 9999 // Large number for perfect circle
    },
    // Top-only radius
    radius_txxs: {
      borderTopLeftRadius: theme.radius_xxs,
      borderTopRightRadius: theme.radius_xxs
    },
    radius_txs: {
      borderTopLeftRadius: theme.radius_xs,
      borderTopRightRadius: theme.radius_xs
    },
    // Bottom-only radius
    radius_bxxs: {
      borderBottomLeftRadius: theme.radius_xxs,
      borderBottomRightRadius: theme.radius_xxs
    },
    radius_bxs: {
      borderBottomLeftRadius: theme.radius_xs,
      borderBottomRightRadius: theme.radius_xs
    },
    // Left-only radius
    radius_lxxs: {
      borderTopLeftRadius: theme.radius_xxs,
      borderBottomLeftRadius: theme.radius_xxs
    },
    // Right-only radius
    radius_rxxs: {
      borderTopRightRadius: theme.radius_xxs,
      borderBottomRightRadius: theme.radius_xxs
    }
  });