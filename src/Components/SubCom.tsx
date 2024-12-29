import { useEffect, useRef } from "react";

function SubCom() {
    const logosRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            const nextSibling = ul.nextSibling as Element | null;
            if (nextSibling) {
                nextSibling.setAttribute('aria-hidden', 'true');
            }
        }
    }, []);
    return (
        <div className="w-full  mx-auto px-4 ">
            <div className="text-center">
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img src="ADS.png" alt="Facebook" className="w-24 grayscale" />
                        </li>
                        <li>
                            <img src="CCT.png" alt="Disney" className="w-24 grayscale"/>
                        </li>
                        <li>
                            <img src="pearlthought.png" alt="Airbnb" className="w-16 grayscale" />
                        </li>
                        
                    </ul>                
                </div>                
            </div>
        </div>
    )
}

export default SubCom
