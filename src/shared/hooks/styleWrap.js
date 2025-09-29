
import { ThemeContext } from '../contexts/themProvider';

import  {useContext,useMemo } from 'react';
import { fontStyles } from '../../styles_/fontStyles.js';
import { boxStyles } from '../../styles_/boxStyles.js';
import { borderStyles} from '../../styles_/basics/border/border.js';
import { radiusStyles} from '../../styles_/basics/border/radius.js';
import { shadowStyles} from '../../styles_/basics/border/shadow.js';
import { bgcStyles} from '../../styles_/basics/bg/bgcolors.js';
import { backgroundBlurStyles} from '../../styles_/basics/bg/bgopacity.js';
import { flexSizes } from '../../styles_/boxSizes.js';
import { flexStyles } from '../../styles_/layouts/flexContainer.js'



const styleWrap = () =>{

  let {theme} = useContext(ThemeContext);
  let styles_ = useMemo(
    () => (
      {
    boxStyles:boxStyles(theme), 
    borderStyles:borderStyles(theme), 
    shadowStyles:shadowStyles(theme),
    radiusStyles:radiusStyles(theme), 

    bgcStyles:bgcStyles(theme),
    backgroundBlurStyles:backgroundBlurStyles(theme),

    fontStyles:fontStyles(theme),

    flexSizes:flexSizes,
    boxSizes:flexSizes,
    flexStyles:flexStyles(theme),

  
   }),
   [theme]); // Only recalculates when theme changes

  return styles_
}

export default styleWrap