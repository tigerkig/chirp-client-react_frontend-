import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';


const Memories = () => {
    
    
    return (
        <div>
            <Navbar />
            <div className='common-wrapper min-h-screen margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common w-full h-full flex items-center justify-center flex-col gap-4'>
                        <h1 className='text-primary  text-3xl font-medium -mt-2'>
                            No Memories Today
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Memories;