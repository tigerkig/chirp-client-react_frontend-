import React, { useContext, useEffect, useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { usePageContext } from '../../context/pageContext';
import { AddImage } from '../../svgs';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PopupContext } from '../../context/popupContext';

const Media = () => {
    const coverRef = useRef(null);
    const profileRef = useRef(null);
    const [pageProfile , setPageProfile] = useState();
    const [pageCover , setPageCover] = useState();
    const [loading , setLoading] = useState(false);
    const { pageData , setPageData , setMyPages , myPages } = usePageContext();
    const { setShowCreatePagePopup , setCreatePageView } = useContext(PopupContext)
    const { user : { token } } = useSelector(state => state.auth);

    const handleCoverClick = (e) => {
        e.stopPropagation();
        coverRef?.current?.click();
    }
    const handleProfileClick = (e) => {
        e.stopPropagation();
        profileRef.current?.click();
    }

    const readFile = (file , setter) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (readerEvent) => {
            setter(readerEvent.target.result)
        }
    }

    useEffect(() => {
        if(pageData?.pageCoverImage){
            readFile(pageData.pageCoverImage , setPageCover);
        }
        if(pageData.pageProfileImage){
            readFile(pageData?.pageProfileImage , setPageProfile);
        }
    }, [pageData])

    const handleCoverChange = (e) => {
        readFile(e.target.files[0] , setPageCover)
        setPageData(prev => { return {...prev , pageCoverImage : e.target.files[0]}});
    }

    const handleProfileChange = (e) => {
        readFile(e.target.files[0] , setPageProfile)
        setPageData(prev => { return {...prev , pageProfileImage : e.target.files[0]}});
    };

    const createPageHandler = async () => {
        const formData = new FormData()
        formData.append('name' , pageData?.name);
        formData.append('description' , pageData?.description);
        formData.append('pageProfileImage' , pageData?.pageProfileImage);
        formData.append('pageCoverImage' , pageData?.pageCoverImage);
        formData.append('privacy' , 'public');
        
        try {
            setLoading(true);
            const { data : { data : { page } } } = await axios.post('https://chirp.shopziaa.com/api/page/create' , formData , {
                headers : {
                    "Content-Type" : "multipart/form-data" ,
                    authorization : `Bearer ${token}`
                }
            });
            if(myPages.length > 0 && typeof myPages === 'object'){
                setMyPages(prev => { return [page , ...prev]})
            }else{
                setMyPages([page])
            }
            setLoading(false);
            setShowCreatePagePopup(false);
            setCreatePageView('create')
            toast.success('Page created successfully.');
            setPageData(null);
        } catch (error) {
            setLoading(false);
            console.log('create page error' , error);
            toast.error(error?.response?.data?.message || "Something went wrong.")
        }
    }


    return (
        <div className='flex flex-col gap-4 py-2'>
            <div className='flex flex-col gap-4  addScroll h-[350px] overflow-auto'>
                <div onClick={handleCoverClick} className='cursor-pointer'>   
                    <span className='text-dark font-semibold dark:text-light'>Cover Photo</span>
                    <div className={`w-full 
                    ${pageCover ? 'h-[200px]' : "h-[150px]"}
                    bg-light dark:bg-dark_primary border border-transparent hover:border-primary rounded-lg flex items-center justify-center mt-2`}>
                        {
                            pageCover 
                            ? 
                                <div className='relative w-full h-full'>
                                    <img src={pageCover} alt="Page Cover" className='w-full h-full object-cover rounded-lg'/>
                                    <div className='absolute bottom-3 right-4 rounded-md py-1.5 px-3 bg-white text-dark_secondary text-xs font-medium cursor-poiner' 
                                    onClick={handleCoverClick}
                                    >
                                        <span>Change</span>
                                    </div>
                                </div>
                            :
                                <>
                                    <div className='border border-primary dark:border-gray-400 rounded-md flex items-center justify-center p-2 gap-2'>
                                        <div className="small-svg-2">
                                            <AddImage />
                                        </div>
                                        <span className='text-primary text-sm dark:text-gray-200'>Upload cover Photo</span>
                                    </div>
                                </>
                        }
                        <input type="file" hidden ref={coverRef} name='cover' onChange={handleCoverChange}/>
                    </div>
                </div>
                <div onClick={handleProfileClick} className='cursor-pointer'>   
                    <span className='text-dark font-semibold dark:text-light'>Profile Photo</span>
                    <div className={`w-full 
                    ${pageProfile ? 'h-[200px]' : "h-[150px]"} 
                    bg-light rounded-lg flex items-center justify-center mt-2 dark:bg-dark_primary border border-transparent hover:border-primary `}>
                        {
                            pageProfile 
                            ? 
                                <div className='relative w-full h-full'>
                                    <img src={pageProfile} alt="Page Cover" className='w-full h-full object-cover rounded-lg'/>
                                    <div className='absolute bottom-3 right-4 rounded-md py-1.5 px-3 bg-white text-dark_secondary text-xs font-medium cursor-poiner' 
                                    onClick={handleProfileClick}
                                    >
                                        <span>Change</span>
                                    </div>
                                </div>
                            :
                                <>
                                    
                                    <div className='border border-primary dark:border-gray-400 rounded-md flex items-center justify-center p-2 gap-2'>
                                        <div className="small-svg-2">
                                            <AddImage />
                                        </div>
                                        <span className='text-primary text-sm dark:text-gray-200'>Upload Profile Photo</span>
                                    </div>
                                </>
                        }
                        <input type="file" hidden ref={profileRef} name='profile' onChange={handleProfileChange}/>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn-primary w-full"
                disabled={!pageData?.pageCoverImage || !pageData.pageProfileImage || loading}
                onClick={createPageHandler}
                >
                    {loading ? <ClipLoader size={20} color="#fff" /> : "Create"}
                </button>
            </div>
        </div>
    )
}

export default Media