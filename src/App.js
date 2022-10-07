import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotAccount from './pages/auth/forgotAccount';
import Verify from './pages/auth/forgotAccount/Verify';
import Demo from './pages/demo';
import Profile from './pages/profile';
import Watch from './pages/watch';
import Pages from './pages/pages';
import Videos from './pages/videos';
import Notifications from './pages/notifications';
import AllStories from './pages/allStories';
import PopularGroups from './pages/groups';
import Friends from './pages/friends';
import Online from './pages/online';
import { PopupContext } from './context/popupContext';
import { useContext } from 'react';
import FeedbackPopup from './components/profileMenus/FeedbackPopup';
import { StoryPopupContext } from './context/storyPopupContext';
import { CreateRoomContext } from './context/createRoomContext';
import CreateStoryPopup from './components/createStoryPopup';
import CreateRoomPopup from './components/createRoomPopup';
import CreatePostPopup from './components/home/createPostPopup/Index';
import CreatePagePopup from './components/createPagePopup';
import CreateEventPopup from './components/createEventPopup';
import { EventContext, useCreateEventContext } from './context/createEventContext';
import { useGroupContext } from './context/createGroupContext';
import CreateGroupPopup from './components/createGroupPopup';
import GroupDetails from './pages/GroupDetails';
import PageDetails from './pages/pageDetails';
import Saved from './pages/saved';
import Memories from './pages/memories';
import EventsPage from './pages/events';
import Clips from './pages/clips';
import Settings from './pages/settings';
import { useSearchContext } from './context/searchContext';
import SearchPopup from './components/searchPopup';
import Menu from './pages/menu';
import { useThemeContext } from './context/themeContext';
import EventDetails from './pages/eventDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const { showFeedbackPopup , showCreatePostPopup , showCreatePagePopup } = useContext(PopupContext)
    const { showStoryPopup } = useContext(StoryPopupContext)
    const { showRoomPopup } = useContext(CreateRoomContext)
    const { showEventPopup } = useCreateEventContext();
    const { showGroupPopup } = useGroupContext();
    const { showSearch } = useSearchContext();

    

    return (
        <div className='font-poppins'>
             <ToastContainer 
                style={{fontSize: 15}}
                position="top-center"
                autoClose={3000}
                hideProgressBar
                closeOnClick
                pauseOnHover
                />
            <Router>
               
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forgot-account' element={<ForgotAccount />} />
                    <Route path='/forgot-account/verify' element={<Verify />} />
                    <Route path='/demo' element={<Demo />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/watch' element={<Watch />} />
                    <Route path='/pages' element={<Pages />} />
                    <Route path='/pages/:id' element={<PageDetails />} />
                    <Route path='/videos' element={<Videos />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/stories' element={<AllStories />} />
                    <Route path='/groups' element={<PopularGroups />} />
                    <Route path='/groups/:id' element={<GroupDetails />} />
                    <Route path='/friends' element={<Friends />} />
                    <Route path='/online' element={<Online />} />
                    <Route path='/saved' element={<Saved />} />
                    <Route path='/favourites' element={<Saved heading='Favourites'/>} />
                    <Route path='/memories' element={<Memories />} />
                    <Route path='/events' element={<EventsPage />} />
                    <Route path='/clips' element={<Clips />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/event/:id' element={<EventDetails />} />
                </Routes>
            </Router>
            {
                showCreatePostPopup && <CreatePostPopup  />
            }
            {
                showFeedbackPopup && <FeedbackPopup />
            }
            {
                showStoryPopup && <CreateStoryPopup />
            }
            {
                showRoomPopup && <CreateRoomPopup />
            }
            {
                showCreatePagePopup && <CreatePagePopup />
            }
            {
                showEventPopup && <CreateEventPopup />
            }
            {
                showGroupPopup && <CreateGroupPopup />
            }
            {
                showSearch && <SearchPopup />
            }
        </div>
    );
}

export default App;
