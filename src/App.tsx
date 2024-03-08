import { ChakraProvider} from '@chakra-ui/react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Chats from './components/Chats'
import InputArea from './components/InputArea'

interface Sender {
  image: string,
  is_kyc_verified: boolean,
  self: boolean,
  user_id: string,
}

export interface Chat {
  id: number
  message: string
  sender: Sender 
  time: string
}

interface Data {
  chats: Chat[]
  from: string
  message: string
  name: string
  status: string
  to: string
} 


function App() {
  const [data, setData] = useState<Data>({
    chats: [],
    from: '',
    to: '',
    name: '',
    message: '',
    status: ''
  })
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://qa.corider.in/assignment/chat?page=0')
        setData(response.data)
        const selfChat = response.data.chats.find((chat : Chat) => chat.sender.self)
        if(selfChat){
          setImage(selfChat.sender.image)
        }
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <ChakraProvider>
        {loading ? (
          null
        ) : (
           <div className='flex flex-col h-screen w-full relative'>
                <Navbar name={data.name} image={image} from={data.from} to={data.to}/>
                <div className='overflow-y-auto flex-grow'>
                  <Chats chats={data.chats}/>
                </div>
                <div className="w-full fixed bottom-0">
                  <InputArea />
                </div>
            </div>
        )}
    </ChakraProvider>
  )
}

export default App
