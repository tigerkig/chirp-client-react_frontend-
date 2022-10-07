import { useSelector } from "react-redux";
import { userData } from "../../../data/User"

const StoryItem = ({ story }) => {
    const user = userData.filter(user => user.id === story?.user )[0]
    const { user : { user : _user }} = useSelector(state => state.auth);
    
    return (
        <div className=' story-item shadow-2 w-full h-[180px] relative flex items-center justify-center rounded-md cursor-pointer '>
            <img src={story?.image} alt="Story" className="absolute top-0 left-0 w-full h-full rounded-md object-cover z-1"/>
            <div 
            className="absolute left-[50%] translate-x-[-50%] bottom-2  flex items-center justify-center flex-col gap-2 z-10">
                <div 
                className="w-[50px] h-[50px] rounded-full overflow-hidden shadow-sm shadow-gray-600"
                >
                    <img 
                    src={_user?.profileImage} 
                    alt={user?.name} 
                    className='w-[50px] h-[50px] rounded-full'
                    />
                </div>
                <span className="text-xs text-rose-700">{user?.firstName}</span>
            </div>
        </div>
    )
}

export default StoryItem