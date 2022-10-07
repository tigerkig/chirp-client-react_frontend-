import { Security , Settings , Clips , SingleUser , Block , Location2 , Public ,StoryBook , FaceEmoji  , Messenger } from "../../../svgs";
import SettingItem from "./settingItem";
import './styles.css';

const settings = [
    {
        title : 'General',
        Svg : Settings
    } ,
    {
        title : 'Security and login',
        Svg : Security
    } ,
    {
        title : 'Your Chirp information',
        Svg : Clips
    } ,
    {
        title : 'Privacy',
        Svg : Security
    } ,
    {
        title : 'Profile and tagging',
        Svg : SingleUser
    } ,
    {
        title : 'Blocking',
        Svg : Block
    } ,
    {
        title : 'Location',
        Svg : Location2
    } ,
    {
        title : 'Language and region',
        Svg : Public    
    } ,
    {
        title : 'Stories',
        Svg : StoryBook    
    } ,
    {
        title : 'Reaction preferences',
        Svg : FaceEmoji    
    } ,
    {
        title : 'Support Inbox',
        Svg : Messenger    
    } ,
]

const Sidebar = ({ currentSetting , setCurrentSetting }) => {
    return (
        <div className="w-full py-4 px-1 md:px-3 flex flex-col gap-4">
            <h3 className="text-dark dark:text-light font-medium text-sm md:text-base">Settings</h3>
            <div className="flex flex-col gap-1">
                {
                    settings?.map((setting,i) => (
                        <SettingItem 
                        key={i} 
                        setting={setting} 
                        currentSetting={currentSetting}
                        setCurrentSetting={setCurrentSetting}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar