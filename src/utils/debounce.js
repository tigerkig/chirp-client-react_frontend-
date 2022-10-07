export const debounce = ( fn , timeout = 300) => {
    let timer;
    const debounced = (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    };
    return debounced;
};