import './styles.css';
import Navbar from '../../components/navbar'
import Leftbar from '../../components/home/leftBar'
import { useEffect, useState } from 'react';
import GroupHeader from '../../components/groupDetails/header';
import Featured from '../../components/groupDetails/featured';
import Events from '../../components/profile/events';
import Photos from '../../components/profile/photos';
import { useGroupContext } from '../../context/createGroupContext';
import { useSelector } from 'react-redux';
import axios from "axios";
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


const GroupDetails = () => {
    const [currentTab , setCurrentTab ] = useState('Featured');
    const [loading , setLoading] = useState(false);
    const { user : { token } } = useSelector(state => state.auth);
    const { setGroupDetails } = useGroupContext();
    const { id } = useParams();

    useEffect(() => {
        const fetchGroupDetails = async () => {
            try {
                setLoading(true);
                const { data : { data : { group } } } = await axios(`https://chirp.shopziaa.com/api/group/${id}` , {
                headers : {
                    authorization: `Bearer ${token}`
                }
                });
                console.log(group);
                setGroupDetails(group);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log('Fetch Page error' , error);
                toast.error(error?.response?.data?.message || "Something went wrong.")
            }
        }
        fetchGroupDetails();
    }, [id , token , setGroupDetails])
    
    return (
        <div>
            <Navbar />
            <div className='profile-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='profile-left'>
                    <Leftbar />
                </div>
                <div className='profile-container w-full py-4'>
                    {
                        loading 
                        ? 
                            <div className='flex items-center justify-center w-full h-full'>
                                <HashLoader size={30} color="#850E10" />
                            </div>
                        : 
                            <div className='profile flex flex-col  gap-4'>
                            <GroupHeader 
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            />
                            <div className="profile-content">
                                {
                                    currentTab === 'Featured'
                                    ? 
                                        <Featured />
                                    : 
                                    currentTab === 'Events'
                                    ? 
                                        <Events />
                                    :
                                    currentTab === 'Photos'
                                    ? 
                                        <Photos />
                                    :
                                        ''
                                }
                            </div>
                            </div>
                    }   
                </div>
            </div>
        </div>
    )
}

export default GroupDetails;