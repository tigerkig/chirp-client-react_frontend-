import './styles.css'; 
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import SearchHeader from '../../components/searchHeader';
import { PopupContext } from '../../context/popupContext';
import { pagesData } from './data';
import PageItem from './PageItem';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { usePageContext } from '../../context/pageContext';
import { HashLoader } from 'react-spinners';

const Pages = () => {
    const [search , setSearch] = useState('');
    const [loading , setLoading] = useState(false);
    const [loading1 , setLoading1] = useState(false);
    const { setShowCreatePagePopup } = useContext(PopupContext);
    const { user : { token } } = useSelector(state => state.auth);
    const { myPages , setMyPages , allPages , setAllPages } = usePageContext();

    useEffect(() => {
        const fetchMyPages = async (endpoint , setter , loadingSetter) => {
            try {
                loadingSetter(true);
                const { data : { data : { pages } } } = await axios.get(`https://chirp.shopziaa.com/api/page/${endpoint}` , {
                    headers : {
                        authorization : `Bearer ${token}`
                    }
                });
                setter(pages);
                loadingSetter(false);
            } catch (error) {
                console.log('fetch Pages error' , error);
                loadingSetter(false);
                toast.error(error?.response?.data?.message || "Something went wrong.")
            }
        }
        fetchMyPages('my' , setMyPages , setLoading);
        fetchMyPages('all' , setAllPages , setLoading1);
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
                        <div className="your-pages flex flex-col gap-4">
                            <div className='search-header shadow-2 bg-pure dark:bg-dark_secondary rounded-lg flex items-center justify-between py-4 sm:px-4 px-2 '>
                                <h3 className='font-semibold text-lg text-dark dark:text-light'>            
                                    Your Pages   
                                </h3>
                                <button className="btn-primary"
                                onClick={() => {
                                    setShowCreatePagePopup(true)
                                }}>
                                    Create Page
                                </button>
                            </div>
                            {
                                loading
                                ?
                                    <div className='flex items-center justify-center w-full h-full py-6'>
                                        <HashLoader size={30} color='#850E10' />
                                    </div>
                                : 
                                    myPages?.length > 0 && typeof myPages === 'object'
                                    ?
                                        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {
                                            myPages?.map((page,i) => (
                                                <PageItem key={i} page={page} user />
                                            ))
                                        }
                                        </div>
                                    : 
                                        <div className='py-6 flex items-center justify-center w-full h-full dark:text-light text-primary'>
                                            <h5>You don't have any page yet.</h5>
                                        </div>
                            }
                        </div>
                        <div className="popular-pages flex flex-col gap-4">
                            <SearchHeader 
                            heading='Suggested' 
                            placeholder='Search for groups'
                            search={search} 
                            setSearch={setSearch} 
                            />

                            {
                                loading1
                                ?
                                    <div className='flex items-center justify-center w-full h-full py-6'>
                                        <HashLoader size={30} color='#850E10' />
                                    </div>
                                : 
                                    allPages?.length > 0 && typeof allPages === 'object'
                                    ?
                                        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {
                                            allPages?.map((page,i) => (
                                                <PageItem key={i} page={page} user />
                                            ))
                                        }
                                        </div>
                                    : 
                                        <div className='py-6 flex items-center justify-center w-full h-full dark:text-light text-primary'>
                                            <h5>No page found.</h5>
                                        </div>
                            }
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Pages;