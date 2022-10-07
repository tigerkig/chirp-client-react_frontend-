import React, { useEffect , useRef , useState } from 'react'
import { useGroupContext } from '../../context/createGroupContext';
import { AddImage } from '../../svgs'

const Media = ({ groupData , setGroupData }) => {
    const coverRef = useRef(null);
    const [selectedImage , setSelectedImage] = useState();
    const { setGroupView } = useGroupContext();

    const handleCoverClick = () => {
        coverRef?.current?.click();
    }
   

    useEffect(() => {
        if(groupData?.groupCoverImage){
            const reader = new FileReader();
            reader.readAsDataURL(groupData.groupCoverImage);
            reader.onload = (readerEvent) => {
                setSelectedImage(readerEvent.target.result);
            }
        }
    }, [groupData])

    const handleImageChange = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (readerEvent) => {
            setSelectedImage(readerEvent.target.result);
        }
        setGroupData(prev => {
            return {...prev , groupCoverImage : e.target.files[0] }
        })
    }
    

    return (
        <div className='flex flex-col gap-4 py-2'>
            <div className='flex flex-col gap-4  addScroll h-full overflow-auto'>
               {
                    groupData?.groupCoverImage
                    ?
                        <div  className='w-full h-[200px] bg-light dark:bg-dark_primary hover:border-primary border border-transparent rounded-lg flex items-center justify-center mt-2'>
                            <img src={selectedImage} alt='Group Cover' className='w-full h-full object-cover rounded-lg'/>
                        </div>
                    : 
                    <div onClick={handleCoverClick} className='cursor-pointer'>   
                        <span className='text-dark font-semibold dark:text-light'>Cover Photo</span>
                        <div className='w-full h-[150px] bg-light dark:bg-dark_primary hover:border-primary border border-transparent rounded-lg flex items-center justify-center mt-2'>
                            <input type="file" hidden ref={coverRef} onChange={handleImageChange}/>
                            <div className='border border-primary dark:border-gray-500 rounded-md flex items-center justify-center p-2 gap-2'>
                                <div className="small-svg-2">
                                    <AddImage />
                                </div>
                                <span className='text-primary text-sm dark:text-gray-200'>Upload cover Photo</span>
                            </div>
                        </div>
                    </div>
               }
               
            </div>
            <div className='flex flex-col gap-3'>
                <button className="btn-primary w-full disabled:cursor-not-allowed"
                disabled={!groupData?.groupCoverImage}
                onClick={() => setGroupView('description')}>
                    Continue
                </button>
                <button className="btn-secondary w-full font-medium"
                onClick={() => setGroupView('description')}>
                    Skip    
                </button> 
            </div>
        </div>
    )
}

export default Media