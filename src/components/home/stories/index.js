import './styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { PlusCircle } from '../../../svgs';
import { storiesData } from '../../../data/Stories';
import StoryItem from './StoryItem';
import { useContext } from 'react';
import { StoryPopupContext } from '../../../context/storyPopupContext';
import  { useNavigate } from 'react-router-dom';

const Stories = () => {
    const navigate = useNavigate()
    const { setShowStoryPopup } = useContext(StoryPopupContext)

    return (
        <div className='w-full flex gap-2'>
                
                <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                clickable: false,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    1450 : {
                        slidesPerView : 6
                    },
                    600 : {
                        slidesPerView : 5
                    },
                    450: {
                      slidesPerView: 4.4,
                      spaceBetween : 4
                    },
                    250 : {
                        slidesPerView : 3.5
                    }
                  }}
                className="mySwiper story-swiper"
                >
                    <SwiperSlide>
                    <div className='story-item w-full h-[180px] bg-gray-900 relative flex items-center justify-center rounded-md cursor-pointer '
                    onClick={() => setShowStoryPopup(true )}>
                        <div className='z-10 text-center absolute bottom-1'>
                            <div className='translate-y-2 plus-circle'>
                                <PlusCircle />
                            </div>
                            <span className='text-rose-700 text-xs'>
                                Add Story
                            </span>
                        </div>
                    </div>
                    </SwiperSlide>
                {/* {
                    storiesData.map((story, i) => (
                        <SwiperSlide key={i} onClick={() => navigate('/stories')}>
                            <StoryItem story={story} />
                        </SwiperSlide>
                    ))
                } */}
                {
                    storiesData.map((story, i) => (
                        <SwiperSlide key={i}>
                            <StoryItem story={story} />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
        </div>
    )
}

export default Stories