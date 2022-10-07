import './styles.css';
import Requests from './requests'
import Birthdays from './birthdays';
import SuggestPages from './SuggestPages';
import Gallery from './gallery';

const Infos = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <Requests />
            </div>
            <div>
                <Birthdays />
            </div>
            <div>
                <SuggestPages />
            </div>
            <div>
                <Gallery />
            </div>
        </div>
    )
}

export default Infos