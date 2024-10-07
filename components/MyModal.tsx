import { ReactNode } from "react";
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Modal,
    View
} from 'react-native';

export default function MyModal(props: {
    children: ReactNode[] | ReactNode, 
    visible: boolean, 
    dismiss: ()=>void, 
    transparent: boolean, 
    animationType: 'none' | 'slide' | 'fade'
    }) {

    return(
        <View>
            <Modal
                visible={props.visible}
                transparent={props.transparent}
                onRequestClose={props.dismiss}
                animationType={props.animationType}
            >
            <TouchableWithoutFeedback onPress={props.dismiss}>
                <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>

            <View style={styles.modalContent}>
                {props.children}
            </View>
        </Modal>
      </View>

    )
}

const styles = StyleSheet.create({
    modalContent: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      margin: 'auto',
      display: 'flex'
      //marginVertical: 'auto',
      //height: '25%',
    },
    modalOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
  });