import {  StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {View, Text} from './Themed'
import { useGetAnswer } from '../api'

interface IQuestionOption {
    options:any[],
    question:string,
    questionId:number
}
export function OptionsTab({ options, question, questionId }: IQuestionOption) {
    const [id, setId] = useState(0)
    const {data} = useGetAnswer(questionId)

    const handleRevealAnswer = ()=> {
        setId(questionId)
    }
    const correctAnswerId = data?.correct_options[0]?.id
    return (
        <View style={styles.container}>
            <View style={styles.question_wrapper}>
                <Text style={styles.question_text}>
                   {question}
                </Text>
            </View>
            <Text>
                id{id}. correct {correctAnswerId}
            </Text>
            <View>
                <FlatList
                    data={options}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={handleRevealAnswer} style={{...styles.options_wrapper, backgroundColor:item.id === correctAnswerId ? '#aaffaa': '#ffaaff' }}>
                            <Text style={styles.option}>{item.answer}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '85%',
        flex: 1,
        marginBottom: 16,
        paddingTop:40
    },
    question_wrapper: {
        padding: 6,
        backgroundColor: '#00000099',
    },
    question_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
    },
    options_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    option: {
        color: '#fff',
        textShadow: '1px 1.5px 2px rgba(0, 0, 0, 0.45)',
        
        fontWeight: '500',
    },
})
