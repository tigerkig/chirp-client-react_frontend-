import './styles.css';
import Navbar from '../../components/navbar'
import Leftbar from '../../components/home/leftBar'
import { useState } from 'react';
import Home from '../../components/pageDetails/home';
import PageHeader from '../../components/pageDetails/header';
import Posts from '../../components/pageDetails/posts';
import Photos from '../../components/profile/photos';
import Videos from '../../components/profile/videos';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { usePageContext } from '../../context/pageContext';
import { HashLoader } from 'react-spinners'


const PageDetails = () => {
    const { id } = useParams();
    const [currentTab , setCurrentTab ] = useState('Home');
    const [loading , setLoading] = useState(false);
    const { user : { token } } = useSelector(state => state.auth);
    const { setPageDetails } = usePageContext()

    useEffect(() => {
        const fetchPageDetails = async () => {
            try {
                setLoading(true);
                const { data : { data : { page } } } = await axios(`https://chirp.shopziaa.com/api/page/${id}` , {
                headers : {
                    authorization: `Bearer ${token}`
                }
                });
                setPageDetails(page);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log('Fetch Page error' , error);
                toast.error(error?.response?.data?.message || "Something went wrong.")
            }
        }
        fetchPageDetails();
    }, [id , token , setPageDetails])
    
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
                            <PageHeader 
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            />
                            <div className="profile-content">
                                {
                                    currentTab === 'Home'
                                    ? 
                                        <Home />
                                    : 
                                    currentTab === 'Posts'
                                    ? 
                                    <Posts />
                                    : 
                                    currentTab === 'Photos'
                                    ? 
                                    <Photos />
                                    : 
                                    currentTab === 'Videos'
                                    ? 
                                    <Videos />
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

export default PageDetails;