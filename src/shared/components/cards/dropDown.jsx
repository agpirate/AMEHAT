
import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
  
import { TouchableOpacity,StyleSheet, Image,View, Text, Modal } from 'react-native';
import { useState,useContext } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const CustomDropdown = ({categories,activeLabel,onAction}) => {
  const [visible, setVisible] = useState(false);

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  return (
    <View style={[{ margin: 1 }]}>

      <TouchableOpacity
        style={[styles.customDropdown,{flexDirection:'row', justifyContent: 'space-between',gap:5,alignItems:'baseline'},
          flexStyles.ia_baseline
        ]}   
        onPress={() => setVisible(!visible)}
      >
        <Text style={[boxStyles.boxStyle_flat,fontStyles.fontStyle_md,fontStyles.fcolor_system,fontStyles.fweight_bold]}>
          { activeLabel || 'Select...'} 
        </Text>

        <MaterialIcons name="more-vert" color="#064482" size={12} />
      </TouchableOpacity>
      
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(true)}
        style={[boxStyles.boxStyle_sm,]}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setVisible(false)}
        >

          <View style={[styles.dropdownList]}>
            <View style={[boxStyles.m_lg,borderStyles.border_flat_system,borderStyles.border_bmd,flexStyles.crow,flexStyles.ia_end]}> 
              <Image source={require('../../../assets/images/tmma.png')} style={{width:40,height:40,resizeMode:'contain'}} />
              
              <Text style={[fontStyles.fontStyle_md,fontStyles.fweight_bold,fontStyles.fcolor_system
              
            ]}> ቋንቋ ኤመሓት</Text>
            </View>

            {Object.values(categories).map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => {
                  onAction(item.id,item.name);
                  setVisible(false);
                }}
              >
                <Text style={[fontStyles.fontStyle_sm,fontStyles.fweight_bold,fontStyles.fcolor_systemii]}>{index+1}. {item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>


    </View>
  );
};

const styles = StyleSheet.create({
  customDropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#e0e0e0',
    
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dropdownList: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 8,
  },
  item: {
    padding: 8,
  },
});

export default CustomDropdown