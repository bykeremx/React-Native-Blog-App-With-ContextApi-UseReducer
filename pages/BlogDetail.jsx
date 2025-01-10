import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
//navigation header




const BlogDetail = ({ route }) => {
    console.log(route.params.detail);
    const { title, content, author } = route.params.detail;
    return (
        <View style={styles.continer}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>{title.toUpperCase()}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.textContent}>{content}</Text>
                </View>

                <View style={styles.author}>
                    <SimpleLineIcons name="user" size={24} color="#909497" />
                    <Text style={styles.textAuthor}>Yazan: {author}</Text>
                </View>
            </View>
        </View>
    )
}

export default BlogDetail
const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#fff',
    }, header: {
        backgroundColor: '#f8f9f9',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 20,

    },
    textHeader: {
        fontSize: 25,
        color: '#2c3e50',
        fontWeight: 'bold'
    }, content: {
        margin: 10,
        padding: 10,
    },
    textAuthor: {
        fontSize: 18,
        lineHeight: 25,
        color: '#909497',
        fontWeight:'bold',
        marginLeft: 10,
    },author:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        padding: 20,
        borderRadius: 20,

    },
    textContent: {
        fontSize: 19,
        lineHeight: 25,
        color: '#2c3e50',
        marginBottom: 10,
        marginLeft: 10,
    }

})

