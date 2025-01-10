import { createContext, useEffect, useReducer } from 'react';

export const blogContext = createContext();

const initialState = {
    blogs: [],
};

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return { ...state, blogs: [...state.blogs, action.payload] };
        case 'DELETE_BLOG':
            return { ...state, blogs: state.blogs.filter(blog => blog.id !== action.payload) };
        case 'UPDATE_BLOG':
            return { ...state, blogs: state.blogs.map(blog => blog.id === action.payload.id ? action.payload : blog) };
        case 'GET_BLOG':
            return { ...state, blogs: [...action.payload] };
        default:
            return state;
    }
};

const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, initialState);

    const getBlog = async () => {
        try {
            const response = await fetch('http://192.168.1.7:3002/blogs');
            const data = await response.json();
            dispatch({ type: 'GET_BLOG', payload: data });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <blogContext.Provider value={{ state, dispatch }}>
            {children}
        </blogContext.Provider>
    );
};

export default BlogContextProvider;
