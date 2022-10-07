import { useGroupContext } from '../../context/createGroupContext';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';


const Description = ({ setGroupData , groupData }) => {
    const { setShowGroupPopup , setGroupView , setMyGroups , myGroups } = useGroupContext();
    const { user : { token } } = useSelector(state => state.auth);
    const [loading , setLoading] = useState(false);

   
    const handleChange = (e) => {
        setGroupData({...groupData , description : e.target.value})
    }
    
    const handleClick = async (e) => {
        try {
            setLoading(true);
            const formData = new FormData()
            formData.append('name' , groupData?.name);
            formData.append('privacy' , groupData?.privacy);
            formData.append('groupCoverImage' , groupData?.groupCoverImage);
            // formData.append('members' , groupData?.members)
            formData.append('description' , groupData?.description)
           

            const { data : { data : { group } } } = await axios.post('https://chirp.shopziaa.com/api/group/create' , formData , {
                headers : {
                    authorization : `Bearer ${token}`
                }
            });
            setLoading(false);
            if(myGroups.length > 0 && typeof myGroups === 'object'){
                setMyGroups(prev => { return [group , ...prev]})
            }else{
                setMyGroups([group]);
            }
            setGroupView('create');
            setGroupData(null);
            setShowGroupPopup(false);
        } catch (error) {
            setLoading(false);
            console.log('create Group Error' , error);
            toast.error(error?.response?.data?.message || "Something went wrong.")
        } 
    }

    return (
           <div className='flex flex-col gap-6'>
                <textarea 
                value={groupData?.description || ''}
                onChange={handleChange}
                placeholder='Describe your group'
                className='outline-none placeholder:text-secondary_light w-full h-[150px] border resize-none border-gray-300 rounded-lg p-3 dark:bg-dark_primary dark:border-gray-500 dark:text-gray-200'
                />
                <div className='flex flex-col gap-3'>
                    <button className="btn-primary w-full disabled:cursor-not-allowed disabled:bg-opacity-50 "
                    disabled={!groupData?.description || loading}
                    onClick={handleClick}>
                        {loading ? <ClipLoader size={20} color="#fff" /> : "Create"}
                    </button>
                    <button className="btn-secondary w-full font-medium"
                    onClick={() => setShowGroupPopup(false)}>
                        Skip    
                    </button>
                </div>
           </div>
    )
}

export default Description