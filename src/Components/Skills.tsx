import { useEffect, useRef } from "react";

function Skills() {
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
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Skills</h2>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img src="React.png" alt="Facebook" className="w-16 grayscale" />
                        </li>
                        <li>
                            <img src="Python.png" alt="Facebook" className="w-16 grayscale" />
                        </li>
                        <li>
                            <img src="sql.png" alt="Facebook" className="w-16 grayscale" />
                        </li>
                        <li>
                            <img src="typescript.png" alt="Facebook" className="w-16 grayscale" />
                        </li>
                    </ul>                
                </div>                
            </div>
        </div>
    )
}

export default Skills
