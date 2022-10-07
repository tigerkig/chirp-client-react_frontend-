import { useContext } from 'react';
import {  useCreateEventContext } from '../../context/createEventContext';
import { useGroupContext } from '../../context/createGroupContext';
import { CreateRoomContext } from '../../context/createRoomContext';
import { PopupContext } from '../../context/popupContext';
import { StoryPopupContext } from '../../context/storyPopupContext';
import { Events , Groups , NewsFeed , Pages , VideoFill , Story } from '../../svgs';
import CreateMenuItem from './CreateMenuItem';

const CreateMenu = ({ setShowMainMenu }) => {
    const { setShowCreatePostPopup , setShowCreatePagePopup } = useContext(PopupContext)
    const { setShowStoryPopup } = useContext(StoryPopupContext)
    const { setShowRoomPopup } = useContext(CreateRoomContext)
    const { setShowEventPopup } = useCreateEventContext();
    const { setShowGroupPopup } = useGroupContext();

    return (
        <div className='bg-pure dark:bg-dark_secondary shadow-2 rounded-lg p-2'>
            <h3 className='text-dark font-semibold dark:text-light'>
                Create
            </h3>
            <div onClick={() => {
                setShowCreatePostPopup(true);
                setShowMainMenu(false);
            }}>
                <CreateMenuItem 
                Svg={NewsFeed} 
                heading='Post'
                />
            </div>
            <div onClick={() => {
                setShowStoryPopup(true);
                setShowMainMenu(false);
            }}>
                <CreateMenuItem 
                Svg={Story} 
                heading='Story'
                />
            </div>
            <div onClick={() => {
                setShowRoomPopup(true);
                setShowMainMenu(false);
            }}>
                <CreateMenuItem 
                Svg={VideoFill} 
                heading='Room'
                />
            </div>
            <div onClick={() => {
                setShowCreatePagePopup(true);
                setShowMainMenu(false);
            }}>
                <CreateMenuItem 
                Svg={Pages} 
                heading='Page'
                />
           </div>
            <div onClick={() => {
                 setShowGroupPopup(true);
                 setShowMainMenu(false);
            }}>
                <CreateMenuItem 
                Svg={Groups} 
                heading='Group'
                />
            </div>
            <div onClick={() => {
                setShowEventPopup(true);
                setShowMainMenu(false);
            }}>
                <CreateMenuItem 
                Svg={Events} 
                heading='Event'
                />
            </div>
        </div>
    )
}

export default CreateMenu