import { FaBook } from "react-icons/fa"
interface Data{
    data:
        {
            year:string,
            position:string,
            company:string,
        }[];
    heading:string;
};
function Education(props:Data) {
    const {data,heading} = props;
    return (
<div className="w-full p-4 bg-[#121214]  rounded-lg shadow sm:p-8  ">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-2xl font-medium leading-none text-white tracking-wide">{heading}</h5>
    </div>
    <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-800 ">
            {data.map((data,i)=><li key={i} className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-white">
                        <FaBook className="w-6 h-6 fill-orange-500"/>
                    </div>
                    <div className="flex flex-col gap-3 min-w-0 ms-4">
                        <p className="text-lg text-gray-400 truncate tracking-wide">
                            {data?.year}
                        </p>
                        <p className="text-xl text-gray-300 font-medium truncate tracking-wide">
                            {data?.position}
                        </p>
                        <p className="text-lg text-gray-400 truncate tracking-wide">
                            {data?.company}
                        </p>
                    </div>
                </div>
            </li>)}
            
        </ul>
    </div>
</div>
    )
}

export default Education
