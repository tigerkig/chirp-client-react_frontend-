import './styles.css';
import { imagesData } from '../../../data/Images'
import TrendingGallery from './TrendingGallery'
import { useState } from 'react';
import PhotosOfYou from './PhotosOfYou';
import ProfilePhotos from './ProfilePhotos';
import CoverPhotos from './CoverPhotos';

const Photos = () => {
    const [tab , setTab] = useState(1);

    return (
        <div>
            <div className='w-full flex gap-4 md:flex-row flex-col '>
                <div className='flex-1'>
                    <TrendingGallery />
                </div>
                <div className='flex-2 flex flex-col gap-4'>
                    <div className='bg-pure dark:bg-dark_secondary rounded-xl shadow-2 py-6 md:px-4 lg:px-12 px-3 flex items-center justify-between text-secondary_light dark:text-gray-200 text-xs sm:text-sm'>
                        <div className='profile-photos-tab-list flex items-center gap-3 sm:gap-8 '>
                            <div 
                            className={`${tab === 1 ? 'active' : ''}`}
                            onClick={() => setTab(1)}
                            >
                                Photos of you
                            </div>
                            <div 
                            className={`${tab === 2 ? 'active' : ''}`}
                            onClick={() => setTab(2)}
                            >
                                Profile Photos
                            </div>
                            <div 
                            className={`${tab === 3 ? 'active' : ''}`}
                            onClick={() => setTab(3)}
                            >
                                Cover Photos
                            </div>
                        </div>
                        <div className='text-primary cursor-pointer dark:text-rose-600'>
                            See All 
                        </div>
                    </div>
                    <div className='bg-pure dark:bg-dark_secondary rounded-xl shadow-2 sm:p-4 p-3'>
                        {
                            tab === 1 
                            ? 
                                <PhotosOfYou images={imagesData}/>
                            : 
                            tab === 2 
                            ? 
                                <ProfilePhotos images={imagesData} />
                            : 
                            tab === 3 
                            ? 
                                <CoverPhotos images={imagesData} />
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos