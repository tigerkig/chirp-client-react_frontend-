import './styles.css';
import Navbar from "../../components/navbar";
import Videos from "../../components/watch/videos";
import WatchMenu from "../../components/watch/watchMenu";
import { useState } from 'react';

const Watch = () => {
    const [currentTab , setCurrentTab] = useState('Home')

    return (
        <div>
            <Navbar />
            <div className="margin ">
                <div className="w-full flex gap-4 bg-light dark:bg-dark_primary min-h-screen py-4">
                    <div className="watch-menu fixed top-0 left-0 h-screen bg-pure dark:bg-dark_secondary w-[350px]">
                        <WatchMenu 
                         currentTab={currentTab} 
                         setCurrentTab={setCurrentTab}
                        />
                    </div>
                    <div className="watch-videos w-[75%] ml-[400px] px-2">
                        <Videos 
                        currentTab={currentTab} 
                        setCurrentTab={setCurrentTab}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch