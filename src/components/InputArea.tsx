import {InputGroup, Input, InputRightElement, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow,  PopoverBody, Image } from '@chakra-ui/react'
import { Paperclip, Camera, Video} from 'lucide-react'

const InputArea = () => {
  return (
    <InputGroup className='p-3 bg-[#FAF9F4]' size='xl'>
      <Input
        type='text'
        placeholder='Reply to @Rohit Yadav'
        size={'md'}
      />
      <InputRightElement className='m-3 pt-1'>
      <Popover>
          <PopoverTrigger>
          <Button variant='ghost' className='pl-1' size='sm'>
          <Paperclip size={20} />
        </Button>
          </PopoverTrigger>
          <PopoverContent border={'none'} bgColor={'transparent'} className='rounded-full ' width="auto" >
            <PopoverArrow bgColor={'#008000'}/>
            <PopoverBody className='bg-[#008000]  flex flex-row justify-center border-0 rounded-full w-auto'>
              <Camera color='white' className='m-1' size={22} />
              <Video color='white' className='m-1' size={22} />
              {/* <Image className='mt-2' src='/icons/video.png' alt='Document' boxSize='20px'/> */}
              <Image className='m-1' src='/icons/Document.png' alt='Document' boxSize='20px'/>
            </PopoverBody>
          </PopoverContent>
      </Popover>
        <Button variant='ghost' size='sm'>
          {/* <SendHorizonal size={24} /> */}
              <Image className='m-1 ml-0' src='/icons/send.png' alt='Document' boxSize='20px'/>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default InputArea