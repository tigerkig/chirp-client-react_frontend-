import { useState } from "react";
import { More } from "../../../../svgs";
import Page from "./Page";
import { pagesData } from "./pagesData"

const YourPages = () => {
    const [showMore , setShowMore] = useState(false);
    return (
        <div>
            <div className='w-full flex flex-col gap-4'>
                <h3 className='text-lg text-secondary dark:text-light font-semibold capitalize'>Your Pages</h3>
                <div className="text-[15px]">
                    {
                        pagesData.slice(0, showMore ? pagesData.length : 5 ).map((page,i) => (
                            <Page page={page} key={i}/>
                        ))
                    }
                    {
                        !showMore ?
                        <div className='flex items-center gap-3 w-full py-2 px-2 hover:bg-active hover:dark:bg-dark_secondary rounded-md cursor-pointer translate-x-[2px]    '
                        onClick={() => setShowMore(true)}
                        >
                            <div className="small-svg ">
                                <More />
                            </div>
                            <p className="dark:text-light">See More</p>
                        </div>
                        : 
                        <div className='flex items-center gap-3 w-full py-2 px-2 hover:bg-active hover:dark:bg-dark_secondary rounded-md cursor-pointer translate-x-[2px] '
                        onClick={() => setShowMore(false)}
                        >
                            <div className="small-svg show-less translate-y-[0px]">
                                <More />
                            </div>
                            <p className="dark:text-light">See Less</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default YourPages