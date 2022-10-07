import { useRef, useState } from 'react';
import './styles.css';
import { useGroupContext } from '../../context/createGroupContext';
import useClickOutside from '../../utils/clickOutside';
import Header from './Header';
import Create from './Create';
import InviteFriends from './InviteFriends';
import Media from './Media';
import Description from './Description';


const CreateGroupPopup = () => {
    const popup = useRef(null);
    const { setShowGroupPopup , groupView , setGroupView } = useGroupContext();
    const [groupData , setGroupData] = useState();
   
    
    useClickOutside(popup , () => {
        setShowGroupPopup(false);
        setGroupView('create');
    })
    
    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[550px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' 
                ref={popup}
                >
                    <Header />
                    <div className="line bg-primary dark:bg-gray-500 w-full h-[1px] mt-2 mb-4"></div>
                    <div className='mt-6'>
                        {
                            groupView === 'create'
                            ? 
                                <Create 
                                groupData={groupData}
                                setGroupData={setGroupData}
                                />
                            : 
                            groupView === 'invite'
                            ? 
                                <InviteFriends 
                                groupData={groupData}
                                setGroupData={setGroupData}
                                />
                            : 
                            groupView === 'media'
                            ? 
                                <Media 
                                groupData={groupData}
                                setGroupData={setGroupData}
                                />
                            :
                            groupView === 'description'
                            ? 
                                <Description 
                                groupData={groupData}
                                setGroupData={setGroupData}
                                />
                            :
                                ''
                        }
                    </div>      


                </div>
            </div>
        </div>
    )
}

export default CreateGroupPopup