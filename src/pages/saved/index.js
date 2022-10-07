import './styles.css';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import { savedData } from './data';
import SavedItem from './SavedItem';

const Saved = ({ heading = 'Saved'}) => {
    
    
    return (
        <div>
            <Navbar />
            <div className='common-wrapper min-h-screen margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common flex flex-col gap-4'>
                       <div className='text-dark text-2xl font-semibold dark:text-light'>
                            <h3>{heading}</h3>
                       </div>
                       <div className='flex flex-col gap-4'>
                            {
                                savedData?.map((item , i)=> (
                                    <SavedItem key={i} item={item} />
                                ))
                            }
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saved;