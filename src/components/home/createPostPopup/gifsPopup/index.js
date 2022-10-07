import './styles.css';
import { Search } from '../../../../svgs';
import PopupHeader from '../PopupHeader';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { debounce } from '../../../../utils/debounce';
import { BeatLoader } from 'react-spinners';
import { PopupContext } from '../../../../context/popupContext';
import { PostViewContext } from '../../../../context/postViewContext';

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)

const GifsPopup = ({ setPostGif , setPostImages , postGif}) => {
    const loader = useRef();
    const { setCurrentPopup } = useContext(PopupContext);
    const { setCurrentPostView } = useContext(PostViewContext);
    const [searchResults, setSearchResults] = useState([]);
    const [trendings , setTrendings] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [limit , setLimit] = useState(10);
    

    useEffect(() => {
        const fetchTrendinGif = async () => {
            const res = await giphy.trending({
                limit ,
            })
            setTrendings(res.data)
        }
        fetchTrendinGif();
    }, [limit ])

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting ) {
            if(limit < 100){
                setLimit(prev => prev + 10)
            }
        }
      }, [limit]);

    useEffect(() => {
        const option = {
          root: null,
          rootMargin: "20px",
          threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    const handleChange = (value) => {
        const apiCall = async () => {
            const res = await giphy.search(value, {
                q : value  
            })
            setSearchResults(res.data)
        }
        apiCall();
    };
    
    const optimizedFn = useCallback(() => debounce(handleChange), []);

    const handleGifClick = (gif) => {
        setPostGif(gif.images.original?.url)
        setPostImages(null);
        setCurrentPopup('createPost');
        setCurrentPostView('media')
    }

    return (
        <div  className="flex flex-col gap-3">
            <PopupHeader headerText="Choose a GIF" />
            <div className='w-full flex flex-col gap-4'>
                <div className="w-full py-2">
                    <div className="border border-gray-200 dark:border-gray-400 dark:bg-dark_secondary bg-light rounded-full py-2 px-3 text-base flex items-center w-full gap-3 filter-svg">
                        <Search />
                        <input 
                        className="bg-transparent border-none outline-none dark:text-gray-200"
                        type="text" 
                        placeholder="Search GIFs" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            optimizedFn(searchText)
                        }}
                        />
                    </div>
                </div>
                <div className='gif-grid w-full grid grid-cols-2 addScroll h-fit max-h-[300px] gap-2 overflow-auto bg-light dark:bg-dark_secondary p-2 relative'>
                    {
                        searchResults.length > 0 ? 
                            searchResults?.map((gif , i) => (
                                <div className='' key={i}>
                                    <img 
                                    src={gif?.images?.original?.url} 
                                    alt='gif' 
                                    className='w-full rounded-md h-[200px] object-cover cursor-pointer' 
                                    onClick={() => handleGifClick(gif)}
                                    />
                                </div>
                            ))
                        : 
                            trendings?.map((gif , i) => (
                                <div className='' key={i}>
                                    <img 
                                    src={gif?.images?.original?.url} 
                                    alt='gif' 
                                    className='w-full rounded-md h-[220px] object-cover cursor-pointer' 
                                    onClick={() => handleGifClick(gif)}
                                    />
                                </div>
                            ))
                    }
                    {
                        limit < 100 && 
                        <div ref={loader} className='gif-loader flex items-center justify-center w-full ml-28'>
                            <BeatLoader color='var(--primary)' size={10}/>
                        </div>
                    }
                </div>
                </div>
        </div>
    )
}

export default GifsPopup