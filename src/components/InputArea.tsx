import {InputGroup, Input, InputRightElement, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow,  PopoverBody } from '@chakra-ui/react'
import { SendHorizonal, Paperclip, Camera, Video, FileDown } from 'lucide-react'

const InputArea = () => {
  return (
    <InputGroup className='p-3 bg-white' size='xl'>
      <Input
        type='text'
        placeholder='Reply to @Rohit Yadav'
        size={'lg'}
      />
      <InputRightElement className='m-3 pt-1'>
      <Popover>
          <PopoverTrigger>
          <Button variant='ghost' className='pl-1' size='md'>
          <Paperclip size={24} />
        </Button>
          </PopoverTrigger>
          <PopoverContent bgColor={'transparent'} className='rounded-full' width="auto" >
            <PopoverArrow bgColor={'#008000'}/>
            <PopoverBody className='bg-[#008000] flex flex-row justify-center border-0 rounded-full w-auto'>
              <Camera color='white' className='m-2' size={24} />
              <Video color='white' className='m-2' size={24} />
              <FileDown color='white' className='m-2' size={24} />
            </PopoverBody>
          </PopoverContent>
      </Popover>
        <Button variant='ghost' size='md'>
          <SendHorizonal size={24} />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default InputArea