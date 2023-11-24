import { StyleSheet } from 'react-native'

import { PageView } from '../../components/PageView'
import { View } from '../../components/Themed'

export default function TabOneScreen() {
    console.log('dafda')
    return (
        <View style={styles.container}>
            <PageView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        width:'100%'
    },
})
