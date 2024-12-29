import UniversalCard from '../Components/UniversalCard'
import Projects from '../Components/Projects'
import LetsConnect from '../Components/LetsConnect'

function Works() {
  return (
    <div className='mt-16 lg:mt-24 space-y-6'>
        <UniversalCard>
            <Projects/>
        </UniversalCard>
        <UniversalCard>
            <LetsConnect/>
        </UniversalCard>
    </div>
  )
}

export default Works
