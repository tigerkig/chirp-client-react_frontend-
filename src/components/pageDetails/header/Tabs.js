

const tabs = [
    'Home' , 'Posts' , 'Videos' , 'Photos' 
]

const Tabs = ({ currentTab , setCurrentTab }) => {


    const handleTabClick = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <div className='tabs-container group-tabs mt-8 px-2 sm:px-0 flex items-center justify-between '>
            <ul className='tabs-list flex items-center gap-6 sm:gap-8 text-base text-secondary'>
                {
                    tabs?.map((tab,i) => (
                        <div key={i} 
                        className={`tab-item cursor-pointer pb-2 hover:text-primary dark:hover:text-rose-600 ${
                            currentTab === tab 
                            ? 'border-b border-b-primary text-primary dark:text-rose-600 dark:border-b-rose-600' 
                            : ''
                        }`}
                        onClick={() => handleTabClick(tab)}
                        >
                            <li >{tab}</li>
                        </div>
                    ))
                }
            </ul>
          
           
        </div>
    )
}

export default Tabs