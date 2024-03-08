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
    <div className='bg-white border-b-2'>
    <div className="grid grid-cols-12 pt-5 pl-5 pr-2">
        <div className='col-span-10'>
            <div className="flex">
                <ArrowLeft className='m-2' size={28} />
                <h1 className='m-1 font-semibold text-2xl'>{name}</h1>
            </div>
        </div>
        <div className="flex flex-row-reverse col-span-2">
                <SquarePen className='m-2' size={24} />
        </div>
    </div>

    <div className="grid grid-cols-12 pt-2 pl-5 pr-2">
        <div className='col-span-10 flex flex-row'>
            <Image className='m-2' borderRadius='full' boxSize='50px' src={image} alt='Dan Abramov'/>
            <div className='flex flex-col m-2'>
                 <h1 className='text-md'>From <span className='font-semibold text-xl'>{from}</span></h1>
                 <h1 className='text-md'>To <span className='font-semibold text-xl'>{to}</span></h1>
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
