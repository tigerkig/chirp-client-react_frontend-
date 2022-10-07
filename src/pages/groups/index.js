import './styles.css';
import { useEffect, useState } from 'react';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import SearchHeader from '../../components/searchHeader';
import { useGroupContext } from '../../context/createGroupContext';
import { popularGroupsData } from './data';
import PopularGroupItem from './PopularGroupItem';
import { postData } from '../../data/post';
import Post from '../../components/home/posts/Post';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';

const PopularGroups = () => {
    const [search , setSearch] = useState('');
    const { setShowGroupPopup , myGroups , setMyGroups , allGroups , setAllGroups } = useGroupContext();
    const [loading , setLoading] = useState(false);
    const [loading1 , setLoading1] = useState(false);
    const { user : { token } } = useSelector(state => state.auth);

    useEffect(() => {
        const fetchMyGroups = async () => {
            try {
                setLoading(true);
                const { data : { data : { groups } } } = await axios.get('https://chirp.shopziaa.com/api/group/my' , {
                    headers : {
                        authorization : `Bearer ${token}`
                    }
                });
                console.log('response' , groups );
                setLoading(false);
                setMyGroups(groups?.length > 0 ? groups : null);
                console.log('my Groups' , myGroups)
            } catch (error) {  
                setLoading(false);
                console.log('fetchGroups Error' , error);
                toast.error(error?.response?.data?.message || "Something went wrong.")
            }
        }
        fetchMyGroups();
    }, []);

    useEffect(() => {
        const fetchAllGroups = async () => {
            try {
                setLoading1(true);
                const { data : { data : { groups } } } = await axios.get('https://chirp.shopziaa.com/api/group/all' , {
                    headers : {
                        authorization : `Bearer ${token}`
                    }
                });
                setLoading1(false);
                setAllGroups(groups?.length > 0 ? groups : null);
            } catch (error) {  
                setLoading1(false);
                console.log('fetchGroups Error' , error);
                toast.error(error?.response?.data?.message || "Something went wrong.")
            }
        }
        fetchAllGroups();
    }, [])
    
    return (
        <div>
            <Navbar />
            <div className='common-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common flex flex-col gap-4'>
                        <div className='flex flex-col gap-4'>
                            <div className='search-header shadow-2 bg-pure dark:bg-dark_secondary rounded-lg flex items-center justify-between py-4 sm:px-4 px-2  '>
                                <h3 className='font-semibold text-lg text-dark dark:text-light'>            
                                    Your Groups   
                                </h3>
                                <button className="btn-primary"
                                onClick={() => {
                                    setShowGroupPopup(true)
                                }}>
                                    Create Group
                                </button>
                            </div>

                            {
                                loading 
                                ? 
                                    <div className='flex items-center justify-center w-full h-full'>
                                        <HashLoader size={35} color='#850E10' />
                                    </div>
                                : 
                                
                                    myGroups && myGroups?.length > 0 && typeof myGroups === 'object'
                                    ? 
                                        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                                            {
                                                myGroups?.map((group,i) => (
                                                    <PopularGroupItem 
                                                    key={i} 
                                                    group={group} 
                                                    user
                                                    />
                                                ))
                                            }
                                        </div>
                                        : 
                                        <div className='w-full h-full flex items-center justify-center dark:text-light text-primary font-semibold text-lg py-6'>
                                            <h5>You don't have any group yet.</h5>
                                        </div>
                                
                                }
                        </div>
                        <div className='flex flex-col gap-4'>
                            <SearchHeader 
                            heading='Popular Groups' 
                            placeholder='Search for groups'
                            search={search} 
                            setSearch={setSearch} 
                            />

                            {
                                loading1 
                                ? 
                                    <div className='flex items-center justify-center w-full h-full'>
                                        <HashLoader size={35} color='#850E10' />
                                    </div>
                                : 
                                
                                    allGroups && allGroups?.length > 0 && typeof allGroups === 'object'
                                    ? 
                                        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {
                                             allGroups?.map((group,i) => (
                                                <PopularGroupItem 
                                                key={i} 
                                                group={group} 
                                                user
                                                />
                                            ))
                                        }
                                        </div>
                                    : 
                                        <div className='w-full h-full flex items-center justify-center dark:text-light text-primary font-semibold text-lg py-6'>
                                            <h5>No Group Found</h5>
                                        </div>
                                
                                }
                        </div>
                        <div className="group-posts-container flex flex-col gap-4">
                            {
                                postData?.map(post => (
                                    <Post key={post.id} post={post} />
                                ))
                            }
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default PopularGroups