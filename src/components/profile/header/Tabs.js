import { useRef, useState } from 'react'
import { DotsMenu } from '../../../svgs';
import useClickOutSide from '../../../utils/clickOutside'

const tabs = [
    'Posts' , 'About' , 'Friends' , 'Photos' , 'Videos' , 'Events' ,
    'Mixes'
]

const Tabs = ({ currentTab , setCurrentTab }) => {
    const subTabsRef = useRef(null)
    const [showSubTabs , setShowSubTabs] = useState(false);

    useClickOutSide(subTabsRef , () => setShowSubTabs(false))

    const handleTabClick = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <div className='tabs-container mt-12 px-2 sm:px-0 flex items-center justify-between '>
            <ul className='tabs-list flex items-center gap-8 text-base text-secondary dark:text-gray-200'>
                {
                    tabs?.map((tab,i) => (
                        <div key={i} 
                        className={`tab-item cursor-pointer pb-2 hover:text-primary dark:border-b-rose-600 dark:hover:text-rose-600 ${
                            currentTab === tab 
                            ? 'border-b border-b-primary text-primaryd dark:text-rose-600 ' 
                            : ''
                        }`}
                        onClick={() => handleTabClick(tab)}
                        >
                            <li >{tab}</li>
                        </div>
                    ))
                }
            </ul>
            <div className='relative cursor-pointer' ref={subTabsRef}>
                <div className="small-svg-2" onClick={() => setShowSubTabs(!showSubTabs)}>
                    <DotsMenu />
                </div>
                {
                    showSubTabs && 
                    <div className='absolute right-2 top-[105%] bg-pure dark:bg-dark_primary dark:text-gray-200 shadow-2 rounded-md py-2 z-10 px-3'>
                        <ul className='flex flex-col '>
                            <li className='bg-transparent rounded-md py-2 px-3 hover:bg-light cursor-pointer'
                            onClick={() => setCurrentTab('About')}>
                                About
                            </li>
                            <li className='bg-transparent rounded-md py-2 px-3 hover:bg-light cursor-pointer'
                            onClick={() => setCurrentTab('Events')}>
                                Events
                            </li>
                            <li className='bg-transparent rounded-md py-2 px-3 hover:bg-light cursor-pointer'
                            onClick={() => setCurrentTab('Videos')}>
                                Videos
                            </li>
                            <li className='bg-transparent rounded-md py-2 px-3 hover:bg-light cursor-pointer'
                            onClick={() => setCurrentTab('Mixes')}>
                                Mixes
                            </li>
                        </ul>
                    </div>
                }
            </div>
           
        </div>
    )
}

export default Tabs