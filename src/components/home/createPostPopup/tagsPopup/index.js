import { FaceEmojiFill, Search } from "../../../../svgs"
import PopupHeader from "../PopupHeader"


const TagsPopup = () => {

    return (
        <div  className="flex flex-col gap-3 filter-svg">
            <PopupHeader headerText="Tag People" />
            <form>
                <div className="w-full flex items-center justify-between gap-4 py-4">
                    <div className="border border-gray-200 dark:border-gray-400 bg-light dark:bg-dark_secondary rounded-full py-2 px-3 text-base flex items-center w-full gap-3">
                        <Search />
                        <input 
                        className="bg-transparent border-none outline-none dark:text-gray-200"
                        type="text" 
                        placeholder="Search for friends" 
                        />
                    </div>
                    <div className="text-primary font-semibold">
                        <button type="submit">
                            Done
                        </button>
                    </div>
                </div>
            </form>

            <div className="w-full relative flex items-center justify-center">
                <div className="text-lg text-secondary_light font-light">
                    <p>No People found</p>
                </div>
                <div className="small-svg absolute top-[2px] right-1 cursor-pointer">
                    <FaceEmojiFill />
                </div>
            </div>

        </div>
    )
}

export default TagsPopup