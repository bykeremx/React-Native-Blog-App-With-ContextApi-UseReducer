import React ,{useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import useBlogs from '../hooks/useBlog'
const EditPage = ({navigation,route}) => {
    const [title,setTitle ] = useState(route.params.detail.title);
    const [content, setContent ] = useState(route.params.detail.content);
    const [author, setAuthor ] = useState(route.params.detail.author);
    const { updateBlog } = useBlogs();
    const updateBlogHadnle = async () =>{
        await updateBlog(route.params.detail.id,title, content, author);
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="create" size={35} color="black" />
                <Text style={styles.titleHeader}>Edit Blog</Text>
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Title</Text>
                <TextInput style={styles.input} 
                value={title}
                onChangeText={(text)=>setTitle(text)}
                />
                <Text style={styles.text}>Content</Text>
                <TextInput style={styles.inputMultiLine} multiline={true}
                
                value={content}
                onChangeText={(text)=>setContent(text)}
                />
                <View style={styles.AuthorHeader}>
                    <Feather name="user" size={24} color="black" />
                    <Text style={styles.text}>Author</Text>

                </View>
                <TextInput style={styles.input} 
                
                value={author}
                onChangeText={(text)=>setAuthor(text)}
                />
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.button}
                    onPress={updateBlogHadnle}
                    >
                        <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton}
                    onPress={()=>navigation.navigate('Home')}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EditPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 20,
        flexDirection: 'row',

    }, titleHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#2c3e50',
        marginLeft: 10,
    }, inputGroup: {
        margin: 40,

    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }, input: {
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    inputMultiLine: {
        borderWidth: 2,
        borderColor: '#ccc',
        marginBottom: 10,
        height: 100,
        borderRadius: 10,
    }, AuthorHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    }, button: {
        backgroundColor: '#82e0aa',
        borderRadius: 10,
        padding:9,
        justifyContent: 'center',
    }, buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },ButtonContainer:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginTop: 10,
    },cancelButton:{
        backgroundColor: '#c0392b',
        borderRadius: 10,
        padding:9,
        marginLeft: 10,
        justifyContent: 'center',
    },cancelButtonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    }
})

