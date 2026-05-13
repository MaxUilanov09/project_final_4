
function propertyTimer(duration, funcInterval, funcEnd) {
    let intervalId = -1;
    let t = 0;
    intervalId = setInterval(() => {
        if (t > 1 && intervalId !== -1) {
            clearInterval(intervalId);
            intervalId = -1;
            funcEnd();
        }
        funcInterval(t);
        t += 10 / duration;
    }, 10)
}

function animate(element, options = {delay: 0, bunch: 1, reverse: false}) {
    if (element) {
        if (options.reverse) {
            let animationFunc = (t) => {
                element.style.display = 'block';
                element.style.transform = `translateY(-${75 * (1 - Math.sqrt(t))}%)`;
                element.style.opacity = Math.cbrt(t);
            }
            let endingFunc = () => {
                element.style.transform = '';
                element.style.opacity = 1;
                window.scrollBy({top: element.clientHeight, behavior: 'smooth'});
            }            
            propertyTimer(options.delay, animationFunc, endingFunc);
        }
        else {
            let animationFunc = (t) => {
                element.style.transform = `translateY(${75 * Math.sqrt(t)}%)`;
                element.style.opacity = 1 - Math.cbrt(t);   
            }
            let endingFunc = () => {
                element.remove();
                
            }
            window.scrollBy({top: -element.clientHeight, behavior: 'smooth'});
            propertyTimer(options.delay, animationFunc, endingFunc);
        }
    }
}

export function animateAll(elementList, options = {delay: 0, bunch: 1, reverse: false}) {
    if (options.reverse) {
        for (let i = 0; i < Math.ceil(elementList.children.length / options.bunch); i++) {
            for (let bunchNum = 0; bunchNum < options.bunch; bunchNum++) {
                if (i * options.bunch + bunchNum < elementList.children.length) {
                    elementList.children[i * options.bunch + bunchNum].style.display = 'none';
                    setTimeout(() => {
                        animate(elementList.children[i * options.bunch + bunchNum], options);
                    }, options.delay * i);
                }
            }
        }
    }
    else {
        for (let i = Math.ceil(elementList.children.length / options.bunch); i > -1; i--) {
            for (let bunchNum = 0; bunchNum < options.bunch; bunchNum++) {
                setTimeout(() => {
                    animate(elementList.children[i * options.bunch + bunchNum], options);
                }, options.delay * (Math.ceil(elementList.children.length / options.bunch) - i));
            }
        }
    }
    return options.delay * (Math.ceil(elementList.children.length / options.bunch) + 1);
}

