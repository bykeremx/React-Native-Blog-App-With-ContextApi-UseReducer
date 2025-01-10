import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import useBlogs from '../hooks/useBlog'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlatList } from 'react-native';
import FlatListItem from './Layout/ItemSection'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
const Home = ({ navigation }) => {
    const { state } = useBlogs();

    if (state.blogs.length == 0) {
        return (
            <View style={styles.continer}>
                <View style={styles.header}>
                    <AntDesign name="warning" size={40} color="" />
                    <Text style={styles.textHeader}>Blog Yok </Text>
                    <TouchableOpacity style={styles.AddBlogButton}
                        onPress={() => navigation.navigate("BlogCreate")}
                    >
                        <MaterialCommunityIcons name="newspaper-plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.continer}>
            <View style={styles.header}>
                {/* ion icon ekle */}
                <FontAwesome name="th-list" size={24} color="black" />
                <Text style={styles.textHeader}>Blog Listesi</Text>
                <TouchableOpacity style={styles.AddBlogButton}
                    onPress={() => navigation.navigate("BlogCreate")}
                >
                    <MaterialCommunityIcons name="newspaper-plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={state.blogs}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <FlatListItem item={item} navigation={navigation}
                        ></FlatListItem>
                    )}
                />
            </View>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#fff',

    }, textHeader: {
        fontSize: 20,
        color: 'dark',
    }, header: {
        padding: 17,
        justifyContent: 'space-between',
        backgroundColor: '#eaecee',
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'center',
        elevation: 2,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
    }, warningText: {
        color: 'white',
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: '#5dade2',
        padding: 10,
        marginTop: 10,
        borderRadius: 25,
    },
    body: {
        padding: 20,
    }, AddBlogButton: {
        backgroundColor: '#2c3e50',
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',


    }
})
