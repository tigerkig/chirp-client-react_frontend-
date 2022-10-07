import './styles.css';
import BirthdayItem from './BirthdayItem';
import './styles.css';

const Birthdays = () => {
    return (
        <div className='bg-pure dark:bg-dark_secondary rounded-lg py-4 pl-3 pr-2 shadow-2 flex flex-col gap-2 '>
            <div className='text-[13px] text-secondary dark:text-light font-semibold'>
                <h3>Birthdays</h3>
            </div>
            <div className='flex flex-col gap-1'>
                <BirthdayItem name='Harry'/>
                <BirthdayItem name='John Doe'/>
                <BirthdayItem name='Ally Ford'/>
                <BirthdayItem name='Monika Malik'/>
                <BirthdayItem name='Jessica Roy'/>
            </div>
        </div>
    )
}

export default Birthdays;