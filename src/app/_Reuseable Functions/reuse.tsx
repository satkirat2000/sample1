export function debounce(func: Function, delay: number) {
    let timerId: ReturnType<typeof setTimeout>;

    return function(this: any, ...args: any[]) {
        clearTimeout(timerId);
        
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}