import MenuItem from "./MenuItem"
import { 
    Friends , Groups , Pages , Watch , Save  , Online , C , Video , Events , Favourites , Memories , Settings , More
} from '../../../../svgs';
import { useState } from "react";


const Menus = () => {
    const [showMore , setShowMore] = useState(false);

    return (
        <div>
            <div className="flex flex-col gap-1 ">
                <MenuItem title='Friends' Svg={Friends} url='/friends' />
                <MenuItem title='Pages' Svg={Pages} url='/pages' />
                <MenuItem title='Groups' Svg={Groups} url='/groups' />
                <MenuItem title='Watch' Svg={Watch} url='/watch' />
                <MenuItem title='Saved' Svg={Save} url='/saved' />
                {
                    !showMore && 
                        <div className='flex items-center gap-3 w-full py-2 px-2 hover:bg-active dark:hover:bg-dark_secondary rounded-md cursor-pointer'
                        onClick={() => setShowMore(true)}
                        >
                            <div className="small-svg ">
                                <More />
                            </div>
                            <p className="dark:text-light">See More</p>
                        </div>
                }
                {
                showMore && 
                <>
                    <MenuItem title='Online' Svg={Online} url='/online' />
                    <MenuItem title='Clips' Svg={C} url='/clips' />
                    <MenuItem title='Live Stream' Svg={Video} url='/live-stream' />
                    <MenuItem title='Events' Svg={Events} url='/events' />
                    <MenuItem title='Favourites' Svg={Favourites} url='/favourites' />
                    <MenuItem title='Memories' Svg={Memories} url='/memories' />
                    <MenuItem title='Settings' Svg={Settings} url='/settings' />
                    <div className='flex items-center gap-3 w-full py-2 px-2 hover:bg-active dark:hover:bg-dark_secondary rounded-md cursor-pointer'
                    onClick={() => setShowMore(false)}
                    >
                        <div className="small-svg show-less">
                            <More />
                        </div>
                        <p className="dark:text-light">Show Less</p>
                    </div>

                </>
                }
              
            </div>
        </div>
    )
}

export default Menus