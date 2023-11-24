import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { ImageBackground, StyleSheet } from 'react-native'
import { useGetQuestions } from '../api'
import ActionBar from './ActionBar'
import { OptionsTab } from './OptionsTab'
import { Text, View } from './Themed'

interface IPageProps {
    bgImage: any
}
export function PageView() {
    
    const {data:questionData} = useGetQuestions()
    const options = questionData?.options?.map((el:any)=> ({...el, answered:false}))
    return (
        <ImageBackground style={styles.background_image} source={questionData?.image}>
            <View style={styles.container}>
                {/* <View style={{height:1200, backgroundColor:'', width:'100%'}}>
                    sdafdfa
                </View> */}
                <View style={styles.top_view}>
                    <View style={styles.timer_wrapper}>
                        <MaterialIcons
                            name='timer'
                            size={24}
                            color={'rgba(255, 255, 255, 0.60)'}
                        />

                        <Text style={styles.timer}>10</Text>
                    </View>
                    <View style={styles.for_you_container}>
                        <Text>For you</Text>
                        <View style={styles.underline}></View>
                    </View>
                    <View>
                        <MaterialIcons
                            name='search'
                            size={24}
                            color={'white'}
                        />
                    </View>
                </View>
                <ActionBar />


                <OptionsTab questionId={questionData?.id} options={options} question={questionData?.question} />
                <View style={styles.topic}>
                    <Text style={styles.title}>{questionData?.user?.name}</Text>
                    <Text style={styles.subtitle}>{questionData?.description}</Text>
                </View>
                <View style={styles.playlist_container}>
                    <View style={styles.play_list_name_wrapper}>
                    <MaterialCommunityIcons name="play-box-multiple" size={24} color="white" />
                        <Text style={styles.play_list_text}>{questionData?.playlist}</Text>
                    </View>
                    <Feather name="chevron-right" size={24} color="white" />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16,
        position: 'relative',
        display:'flex',
        backgroundColor:'transparent'
    },
    background_image:{
        resizeMode:'center',
        position:'relative',
        flex:1
    },

    timer_wrapper: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        backgroundColor:'transparent'

    },
    timer: {
        color: 'rgba(255, 255, 255, 0.60)',

    },
    top_view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'transparent'

    },
    underline: {
        backgroundColor: '#fff',
        height: 4,
        width: 30,
        margin: 'auto',
    },
    for_you_container: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        backgroundColor:'transparent'

    },
    for_you: {
        fontSize: 16,
        fontWeight: '600',
        backgroundColor:'transparent'

    },
    playlist_container:{
        width:'100%',
        position:'absolute',
        bottom:0,
        left:0,
        paddingHorizontal:16,
        paddingVertical:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#161616'
    },
    play_list_name_wrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:8
    },
    play_list_text:{
        fontSize:13,
        color:'#ffffff',
        fontWeight:'600'
    },
    topic:{
        marginBottom:42,
        backgroundColor:'transparent'
    },
    title :{
        color:'#ffffff',
        fontSize: 13,
        fontWeight: '400',
        marginBottom:6,
    },
    subtitle:{
        color:'#ffffff',
        fontSize: 13,
        fontWeight: '700',

    }
})
