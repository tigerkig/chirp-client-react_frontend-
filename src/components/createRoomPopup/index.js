import { useContext, useRef } from 'react';
import { CreateRoomContext } from '../../context/createRoomContext';
import { RightArrow, Video } from '../../svgs';
import useClickOutside from '../../utils/clickOutside';
import Header from './Header';
import './styles.css';

const CreateRoomPopup = () => {
    const popup = useRef(null);
    const { setShowRoomPopup } = useContext(CreateRoomContext);

    useClickOutside(popup , () => setShowRoomPopup(false))
    
    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' 
                ref={popup}
                >
                    <Header />
                    <div className="line bg-primary dark:bg-gray-500 w-full h-[1px] mt-2 mb-4"></div>
                    <div className='flex flex-col gap-4 py-2'>
                        <div className='flex items-center justify-center flex-col gap-2 cursor-pointer '
                        >
                            <div className='w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center pure-svg'>
                                <Video />
                            </div>
                            <p className='text-[13px] sm:text-base font-normal text-secondary_light dark:text-gray-300'>
                                Create Your Room
                            </p> 
                        </div> 
                        <div className='flex flex-col gap-1 mt-4'>
                            <div className='flex items-center justify-between cursor-pointer py-2 pl-1 pr-1 rounded-lg hover:bg-active dark:hover:bg-dark_primary '>
                                <div className='flex items-center gap-3 '>
                                    <div className='bg-light dark:bg-dark_primary rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                                        <img 
                                        src='/svgs/hi.svg' alt='Hi' 
                                        className='w-[25px] h-[25px]'
                                        />
                                    </div>
                                    <div>
                                        <h4 className='text-dark font-semibold dark:text-gray-200'>
                                            Room Name
                                        </h4>
                                        <p className='text-xs text-secondary_light'>
                                            Umer's Room
                                        </p>
                                    </div>
                                </div>
                                <div className="small-svg-2 right-arrow">
                                    <RightArrow />
                                </div>
                            </div> 
                            <div className='flex items-center justify-between cursor-pointer py-2 pl-1 pr-1 rounded-lg hover:bg-active dark:hover:bg-dark_primary '>
                                <div className='flex items-center gap-3 '>
                                    <div className='bg-light dark:bg-dark_primary rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                                        <img 
                                        src='/svgs/clock.svg' alt='Hi' 
                                        className='w-[25px] h-[25px]'
                                        />
                                    </div>
                                    <div>
                                        <h4 className='text-dark font-semibold dark:text-gray-200'>
                                            Start Time
                                        </h4>
                                        <p className='text-xs text-secondary_light'>
                                            Now
                                        </p>
                                    </div>
                                </div>
                                <div className="small-svg-2 right-arrow">
                                    <RightArrow />
                                </div>
                            </div>   
                        </div> 
                        <div className='w-full text-center text-xs text-secondary_light'>
                            <span>Your room isn't visible until you invite people after you have created</span>
                        </div>
                        <div>
                            <button className="btn-primary w-full">Create Room</button>
                        </div>
                    </div>                    

                </div>
            </div>
        </div>
    )
}

export default CreateRoomPopup;