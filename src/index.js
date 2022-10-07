import './App.css';
import './styles/global.css';
import './styles/utility.css';
import './styles/common.css';
import "swiper/css/bundle";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/themeContext';
import { PopupContextProvider } from './context/popupContext';
import StoryPopupContextProvider from './context/storyPopupContext';
import { StoriesContextProvider } from './context/storiesContext';
import CreateRoomContextProvider from './context/createRoomContext';
import PostViewContextProvider from './context/postViewContext';
import EventContextProvider from './context/createEventContext';
import GroupContextProvider from './context/createGroupContext';
import SearchContextProvider from './context/searchContext';
import { AuthContextProvider } from './context/authContext';
import PostsContextProvider from './context/postsContext';
import PageContextProvider from './context/pageContext';

import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <PopupContextProvider>
            <PostViewContextProvider>
                <StoryPopupContextProvider>
                    <StoriesContextProvider>
                        <CreateRoomContextProvider>
                            <EventContextProvider>
                                <GroupContextProvider>
                                    <SearchContextProvider>
                                        <AuthContextProvider>
                                            <PostsContextProvider>
                                                <PageContextProvider>
                                                    <Provider store={store}>
                                                        <App />
                                                    </Provider>
                                                </PageContextProvider>
                                            </PostsContextProvider>
                                        </AuthContextProvider>
                                    </SearchContextProvider>
                                </GroupContextProvider>
                            </EventContextProvider>
                        </CreateRoomContextProvider>
                    </StoriesContextProvider>
                </StoryPopupContextProvider>
            </PostViewContextProvider>
        </PopupContextProvider>
    </ThemeProvider>
);


