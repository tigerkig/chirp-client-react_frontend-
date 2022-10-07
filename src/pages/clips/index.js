import './styles.css';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import Clip from './Clip';

const Clips = () => {
    
    
    return (
        <div>
            <Navbar />
            <div className='common-wrapper margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common '>
                       <div className="clips-container">
                           <div className="clips">
                                <Clip src='/videos/vid-2.mp4'/>
                                <Clip src='/videos/vid-1.mp4'/>
                                <Clip src='/videos/vid-2.mp4'/>
                                <Clip src='/videos/vid-1.mp4'/>

                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clips;