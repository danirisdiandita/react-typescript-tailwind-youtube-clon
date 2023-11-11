import logo from '../assets/react.svg'
import Bars3 from '../assets/icons/Bars3'
const PageHeader = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between'>
        <div className='flex gap-4 items-center flex-shrink-0'>
            <button>
             <Bars3/>
            </button>
            <a href='/'>
                <img src={logo} className='h-6'/>
                </a>
        </div>
        <div></div>
        <div></div>
        
        
        </div>
  )
}

export default PageHeader