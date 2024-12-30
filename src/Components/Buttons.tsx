import { Link } from "react-router-dom";

export const PrimarySemiRoundedButton = () => {
  return (
    <button className='bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-orange-500 hover:border-orange-500 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-orange-500 active:border-orange-500'>
      <Link to="/contact">Hire Me</Link>
    </button>
  )
}

interface Button{
    text:string,
    link:string,
    target?:string,
}
export const PrimaryOutlineButton = (props:Button) => {
  const {text, link, target} = props;
  return (
    <button className='bg-orange-500 border rounded-xl inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium border-orange-900 text-primary hover:bg-orange-light-5 hover:text-body-color dark:hover:text-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue-light-3' >
        <Link to={link} target={target}>{text}</Link>
    </button>
  )
}


