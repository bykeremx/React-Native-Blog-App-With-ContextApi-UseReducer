//useBlogs 
import { useContext } from 'react'
import { blogContext } from '../context/blogContext'

export default function useBlogs() {
    const { state, dispatch } = useContext(blogContext);
    //getBlog 

    const getBlogs = async () => {
        try {

            const response = await fetch('http://192.168.1.7:3002/blogs');
            if (!response.ok) {
                throw new Error('Could not add blog');
            }
            const data = await response.json();
            dispatch({ type: 'GET_BLOG', payload: data });
        } catch (error) {
            console.log("Blog Gelmedi ! ")
        }
    }

    const addBlog = async (title, content, author) => {
        try {

            const response = await fetch('http://192.168.1.7:3002/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, author }),
            });
            if (!response.ok) {
                throw new Error('Could not add blog');
            }
            getBlogs();
        } catch (error) {

        }
    }
    //delete Blogs 
    const deleteBlog = async (id) => {
        try {

            const response = await fetch(`http://192.168.1.7:3002/blogs/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Could not delete blog');
            }
            getBlogs();
        }
        catch (error) {
            console.log("Blog Silinemedi!")
        }
    }
    //update Blogs
    const updateBlog = async (id, title, content, author) => {
        try {
            const response = await fetch(`http://192.168.1.7:3002/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, title, content, author }),
            });

            if (!response.ok) {
                const errorMessage = `HTTP Status: ${response.status}`;
                throw new Error(errorMessage);
            }

            console.log("Blog Başarıyla Güncellendi!");
            dispatch({
                type: 'UPDATE_BLOG',
                payload: { id, title, content, author },
            });
            getBlogs(); // Blogları yeniden yükle
        } catch (error) {
            console.error("Blog Güncellenemedi! Hata:", error.message);
        }
    };


    return {
        state,
        addBlog,
        getBlogs,
        deleteBlog,
        updateBlog
    }

}