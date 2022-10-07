import { useState } from "react";
import { More } from "../../../../svgs";
import Group from "./Group";
import { groupsData } from "./groupsData";

const YourGroups = () => {
    const [showMore , setShowMore] = useState(false);


    return (
        <div>
            <div className='w-full flex flex-col gap-4'>
                <h3 className='text-lg text-secondary dark:text-light font-semibold capitalize'>Your Groups</h3>
                <div className="text-[15px]">
                    {
                        groupsData.slice(0, showMore ? groupsData.length : 5 ).map((group , i) => (
                            <Group group={group} key={i}/>
                        ))
                    }
                    {
                        !showMore ?
                        <div className='flex items-center gap-3 w-full py-2 px-2 hover:bg-active hover:dark:bg-dark_secondary rounded-md cursor-pointer translate-x-[2px]    '
                        onClick={() => setShowMore(true)}
                        >
                            <div className="small-svg">
                                <More />
                            </div>
                            <p className="dark:text-light">See More</p>
                        </div>
                        : 
                        <div className='flex items-center gap-3 w-full py-2 px-2 hover:bg-active hover:dark:bg-dark_secondary rounded-md cursor-pointer translate-x-[2px] '
                        onClick={() => setShowMore(false)}
                        >
                            <div className="small-svg show-less ">
                                <More />
                            </div>
                            <p className="dark:text-light">Show Less</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default YourGroups