import { useState } from 'react'
import { RightArrow, Search } from '../../svgs';
import { userData } from '../../data/User';
import InviteFriendItem from './InviteFriendItem';
import { useGroupContext } from '../../context/createGroupContext';
import { useEffect } from 'react';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux';

const InviteFriends = ({ groupData , setGroupData }) => {
    const { setGroupView } = useGroupContext();
    const [search , setSearch] = useState('');
    const [loading , setLoading] = useState(false);
    const { user : { token } } = useSelector(state => state.auth);
    const [users , setUsers] = useState();
    const [checkedUsers , setCheckedUsers] = useState();

   useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const { data : { data : { users } } } = await axios.get('https://chirp.shopziaa.com/api/user/all' , {
                    headers : {
                        authorization : `Bearer ${token}`
                    }
                });
                setUsers(users);
                setLoading(false);
                if(groupData?.members){
                    

                }
               
            } catch (error) {
                setLoading(false);
                console.log('fetch users error', error);
                toast.error(error?.response?.data?.message || "Something went wrong.")
            }
        }
        fetchUsers();
       
    }, []);


   
    const handleChange = (e , user) => {
        const { checked , name } = e.target;
        if(name === 'selectAll'){
            let tempUsers = users?.map(user => (
                {...user , isChecked : checked }
            ))
            setUsers(tempUsers);
            
        }else{
            let tempUsers = users?.map(_user => (
                _user._id.toString() === user._id.toString() ? {..._user , isChecked : checked } : _user  
            ))
            setUsers(tempUsers);
        }   
    }

    const handleContinueClick = () => {
        if(!users?.some(user => user.isChecked) && groupData?.members?.length < 1){
            return toast.error('Please select atleast one member.')
        }
        setGroupData(prev => {
            return {...prev , members : users?.filter(user => 
                user.isChecked && { member : user._id }     
            )}
        })

        setGroupView('media');
    }

    return (
        <div className='w-full py-4 flex flex-col items-center justify-center gap-4' >
            <div className="border border-gray-200 bg-light dark:bg-dark_primary dark:border-gray-500 rounded-full py-1.5 px-3 text-base flex items-center w-[90%] sm:w-[80%] gap-3 filter-svg">
                <Search />
                <input 
                className="bg-transparent border-none outline-none w-full sm:w-[85%] text-sm sm:text-base dark:text-light"
                type="text" 
                placeholder='Start typing to search..' 
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                />
            </div> 
            <div className='sm:w-[80%] w-[90%] shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4 addScroll overflow-auto h-[300px]'>
                <div className='flex items-center justify-between'> 
                    <h3 className='text-dark font-semibold text-base dark:text-light'>
                        Suggested
                    </h3>
                    <div className='flex items-center gap-1.5'>
                        <label className='text-sm text-secondary dark:text-gray-200' htmlFor="selectAll">Select All</label>
                        <input
                        type="checkbox"
                        name="selectAll"
                        id="selectAll"
                        checked={!users?.some(user => user.isChecked !== true )}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                {
                    loading 
                    ? 
                        <div className='flex items-center justify-center w-full h-full'>
                            <HashLoader size={30} color='#B30F12' />
                        </div>
                    : 
                        <div className='w-full flex flex-col gap-4 '>
                            {
                                users?.map((user, i) => (
                                    <div className='flex items-center justify-between' key={user._id || i}>
                                        <label htmlFor={user?._id}>
                                            <div className='flex items-center gap-3'>
                                                <div className="circle-img">
                                                    <img src={user?.profileImage} alt="" />
                                                </div>
                                                <span className='dark:text-gray-300'>{user?.firstName + ' ' + user?.lastName }</span>
                                            </div>
                                        </label>
                                        <div>
                                            <input 
                                            type="checkbox" 
                                            id={user?._id} 
                                            checked={user.isChecked}
                                            onChange={(e) => handleChange(e , user)}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
            <div className='sm:w-[80%] w-[90%] flex flex-col gap-4'>
                <button className="btn-primary w-full"
                onClick={handleContinueClick}>
                    Continue
                </button>
                <button className="btn-secondary w-full font-medium"
                onClick={() => setGroupView('media')}>
                    Skip    
                </button> 
            </div>
        </div>
    )
}

export default InviteFriends