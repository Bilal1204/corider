import {SquarePen,ArrowLeft, MoreVertical} from 'lucide-react'
import { Image } from '@chakra-ui/react'

interface NavbarProps {
    name: string
    image: string
    from: string
    to: string
}

const Navbar = ({name, image, from, to} : NavbarProps) => {
  return (
    <div className='border-b'>
    <div className="grid grid-cols-12 pt-5 pl-2 pr-2">
        <div className='col-span-10'>
            <div className="flex">
                <ArrowLeft className='m-2' size={28} />
                <h1 className='m-1 font-semibold text-2xl'>{name.replace("No.", "")}</h1>
            </div>
        </div>
        <div className="flex flex-row-reverse col-span-2">
                <SquarePen className='m-2' size={24} />
        </div>
    </div>

    <div className="grid grid-cols-12 pl-2 pr-2">
        <div className='col-span-10 flex flex-row'>
            <Image className='m-2 mt-3' borderRadius='full' boxSize='50px' src={image} alt='Dan Abramov'/>
            <div className='flex flex-col m-2'>
                 <h1 className='text-md font-[500] text-[#606060]'>From <span className='font-semibold text-xl text-[#141E0D]'>{from}</span></h1>
                 <h1 className='text-md font-[500] text-[#606060]'>To <span className='font-semibold text-xl text-[#141E0D]'>{to}</span></h1>
            </div>
        </div>
        <div className="flex flex-row-reverse col-span-2">
                <MoreVertical className='pt-2 m-2' size={30} />
        </div>
    </div>

</div>
  )
}

export default Navbar
