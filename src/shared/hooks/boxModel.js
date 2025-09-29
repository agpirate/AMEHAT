
/*
       box [ p,m,border(size,color),radius(curvSize),]

*/
/*BOX
     border-box                       | m
      |            ============================================= border                   .....px_Screen           |
      |         radius                | p                                                 100  Section_Screen of   |=  bound  = {inner,outer}
      |                --------------------------------- OuterBox(min/max)                          * Parent _ %   |
      |                                                                                             * Screen _VWH  |
      |                   -------------------------- colonized(growShrink,xfr)            -----------------------
      |                                                                                   auto(stretching)         ]= !bound  = {inner}
      |   content-box        --------------------- InnerBorder(W,H)                       
      H     H|                     Content                                                grow-shrink              |_  bound  = {colonized}
                        (ground [bg,opa,fg ] ; fontStyle [reset,disp,style] )             xfr                      |
  |_________________________________________________________________________| Screen Responsivness ( media Size Query)

  @bound(WALL) :- @WAllRules -> breaking Rule ? |- break 
                                                |- unbreak ---> overflow style(visible,hidden,scroll,auto,clip)

          |        boxes@line               words@line
         [1]    nth boxes@Jborder         nth word@Jline
          |       bp? box@space           bp? word@space    
          |        break ; unbreak          break ; unbreak
          |
         [2]       box @line                word @line
          |        box @Jborder             word @Jborder
          |      bp? void             bp? letter @space
          |                unbreak              break ; unbreak

------------------- ( %,px,vwh,ratio,auto [inner_w|H] ; grow/shrink,xFr [inner_coloniz] ; %,px,vwh,ratio[outer_min/max],)

Display    =  boundSized(with @WallRules)/unbound box ;  -- child layouts & sizing  = Display
           Hidden(takeSpace),
           None(disapeared),
           Block : parent(?auto_inner,?100%_outer) -parentBound_Inheritance -- editable
                               boxe @space(void) ;              parent,grands stretches ????  
                               boxes@space(en) ;              |   en(break)
                               words@space (? en)             |==|
                               word @space (? dis)            |   dis(unbreak/overflow). overflow styles ?

                               child : 100%_inner             => if inline(uneditable) ; other(editable-%,VWH,px...inner(W,H)/outer(min/max))             

           Inline : parent(auto_inner,100%_outer) - parentBound_Inheritance -- uneditable
                               boxe @space(en) ;              parent,grands stretches ????  
                               boxes@space(dis) ;             |   en(break)
                               words@space (? en)             |==|
                               word @space (? dis)            |   dis(unbreak/overflow). overflow styles ?

                               child : auto_inner             => if inline(uneditable) ; other(editable-%,VWH,px...inner(W,H)/outer(min/max))            

           Flex : parent(?auto_inner,?100%_outer) - parentBound_Inheritance -- editable
                               boxe @space(void) ;              parent,grands stretches ????  
                               boxes@space(en) ;              |   en(break)
                               words@space (? en)             |==|
                               word @space (? dis)            |   dis(unbreak/overflow). overflow styles ?

                               child : auto_inner             => if inline(uneditable) ; other(editable-%,VWH,px...inner(W,H)/outer(min/max)) + ratio
             
           Grid : parent(?auto_inner,?100%_outer) -parentBound_Inheritance -- editable
                               boxe @space(void) ;              parent,grands stretches ????  
                               boxes@space(en) ;              |   en(break)
                               words@space (? en)             |==|   
                               word @space (? dis)            |   dis(unbreak/overflow). overflow styles ?

                               child : xy-loc                 => if inline(uneditable) ;; other(editable-%,VWH,px...inner(W,H)/outer(min/max))
*/
import { ThemeContext } from '../contexts/themProvider.js';

import  {useContext,useMemo } from 'react';
import {
       boxReseting,
       boxSpacing,
       borderStyle,
       borderRadius,
       borderShadow,

       bgcolors,
       bgopacity,
       gvisibility,

       fontStyles,
       fontReseting,
       fontDisplay,
       

       flexDisplay,

       AtWallBreakSettings,
       UnBreak_OverflowStyles,

       InnerSizes,
       OuterSizes,

       boxPositioning,

} from "../../styles/index.js"

const styleWrap = () =>{

  let {theme} = useContext(ThemeContext);
  let styles_ = useMemo(
    () => (
      {


      ...boxSpacing(theme),
      ...borderStyle(theme),
      ...borderRadius(theme),

      ...borderShadow(theme),
      ...bgcolors(theme),

      ...bgopacity(theme),
      ...gvisibility(theme),

    ...fontStyles(theme),
    ...fontReseting(theme),
    ...fontDisplay(theme),
    
    
    ...flexDisplay(theme),
    ...AtWallBreakSettings(theme),
    ...UnBreak_OverflowStyles(theme),

    ...InnerSizes(theme),
    ...OuterSizes(theme),

    ...boxPositioning(theme),

      ...boxReseting(theme), // the first value..will take..ignore upcoming


   }),
   [theme]); // Only recalculates when theme changes
  // console.log(styles_.)
  return styles_
}

export default styleWrap