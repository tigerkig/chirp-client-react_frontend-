import { Groups , Pages , Events , Watch , C , Video , Saved , Friends , Favourites , Memories , Settings  } from '../../svgs';
import SubMenuItem from './SubMenuItem';

const menus = [
    {
        title : 'Groups',
        Svg : Groups , 
        url : '/groups'
    } ,
    {
        title : 'Pages',
        Svg : Pages ,
        url : '/pages'
    } ,
    {
        title : 'Events',
        Svg : Events ,
        url : '/events'
    } ,
    {
        title : 'Watch',
        Svg : Watch ,
        url : '/watch'
    } ,
    {
        title : 'Latest Clips',
        Svg : C ,
        url : '/clips'
    } ,
    {
        title : 'Live Stream',
        Svg : Video ,
        url : '#'
    } ,
    {
        title : 'Saved',
        Svg : Saved ,
        url : '/saved'
    } ,
    {
        title : 'Friends',
        Svg : Friends ,
        url : '/friends'
    } ,
    {
        title : 'Favourites',
        Svg : Favourites ,
        url : '/favourites'
    } ,
    {
        title : 'Memories',
        Svg : Memories ,
        url : '/memories'
    } ,
    {
        title : 'Settings',
        Svg : Settings ,
        url : '/settings'
    } ,
]

const SubMenus = () => {
    return (
        <div className='w-full grid md:grid-cols-3 grid-cols-2 gap-4'>
            {
                menus?.map((menu , i)=> (
                    <SubMenuItem key={i} menu={menu} />
                ))
            }
        </div>
    )
}

export default SubMenus