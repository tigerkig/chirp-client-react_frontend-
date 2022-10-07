import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { backgroundData } from "./BackgroundsData";
import { useContext } from "react";
import { PostViewContext } from "../../../context/postViewContext";

const PostBackgrounds = ({ }) => {
    const { setPostBg , setCurrentPostView , postBg } = useContext(PostViewContext)

    const handleBgClick = bg => {
        setPostBg(bg);
        console.log(postBg)
        setCurrentPostView('background')
    }

    return (
        <div className="post-bg-container w-full">
             <Swiper
                slidesPerView={10}
                spaceBetween={5}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    550 : {
                        slidesPerView : 10
                    },
                    500 : {
                        slidesPerView : 7
                    } ,
                    450 : {
                        slidesPerView : 6
                    } ,
                    340 : {
                        slidesPerView : 5.4
                    } ,
                    250 : {
                        slidesPerView : 4.2
                    }
                  }}
                className="mySwiper post-bg-swiper"
                >
                    <SwiperSlide>
                        <div 
                        className="post-bg-white" 
                        onClick={() => {
                            setPostBg(null);
                            setCurrentPostView('text')
                        }}
                        >
                        </div>
                    </SwiperSlide>
                {
                    backgroundData.map((bg, i) => (
                            <SwiperSlide  key={i} >
                                <img 
                                src={bg.url} 
                                alt='Post Backgrounds' 
                                className="cursor-pointer"
                                onClick={() => handleBgClick(bg)}
                                />
                            </SwiperSlide>
                    ))
                }
                </Swiper>
        </div>
    )
}

export default PostBackgrounds