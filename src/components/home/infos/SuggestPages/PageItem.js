
const PageItem = ({ name , image  }) => {
    return (
        <div className='w-full flex flex-col gap-1'>
            <div className='w-full'>
                <img src={image} alt={name} className='rounded-md w-full'/>
            </div>
            <div>
                <button className="btn-secondary w-full capitalize text-13">
                    {name}
                </button>
            </div>
        </div>
    )
}

export default PageItem