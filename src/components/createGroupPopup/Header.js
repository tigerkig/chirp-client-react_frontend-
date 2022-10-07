import { useGroupContext } from '../../context/createGroupContext';
import { CircleCross, LeftArrow } from '../../svgs';

const Header = () => {
    const { setShowGroupPopup , groupView , setGroupView } = useGroupContext();
    const handleBackClick = () => {
        if(groupView === 'iniviteFriends'){
            setGroupView('create')
        }else if (groupView === 'media'){
            setGroupView('invite')
        }else if (groupView === 'description'){
            setGroupView('media')
        }else{
            setGroupView('create')
        }
    }
    return (
        <div className='create-story-header w-full flex items-center justify-between py-2'>
            {
                groupView !== 'create' &&
                <div className="small-svg-2 bg-light rounded-full dark:bg-dark_primary cursor-pointer"
                onClick={handleBackClick}>
                    <LeftArrow />
                </div>
            }
            <div className='text-xl font-bold text-primary text-center w-full dark:text-light'>
                <h3>
                    { 
                        groupView === 'create' 
                        ? 'Create Group'
                        : 
                        groupView === 'invite'
                        ? 'Invite Friends'
                        :
                        groupView === 'media'
                        ? 'Add Photos'
                        : 
                        groupView === 'description'
                        ? 'Description'
                        : ''
                    }
                </h3>
            </div>
            <div 
            className="cursor-pointer" 
            onClick={() => {
                setShowGroupPopup(false);
                setGroupView('create');
            }}
            >
                <CircleCross />
            </div>
        </div>
    )
}

export default Header;