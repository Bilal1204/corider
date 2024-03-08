import { useCallback} from "react"
import { Chat } from "../App"
import { Image } from '@chakra-ui/react'

type ChatProps = {
    chats: Chat[]
}

const Chats = ({chats} : ChatProps ) => {
    let prevDate = ''

    const scrollRef = useCallback((node : HTMLElement | null) => {
        if (node !== null) {
            node.scrollIntoView();
        }
    }, []);

    return (
        <div className="pb-5 mb-10">
            {chats.map((chat: Chat, index: number) => {
                const date = new Date(chat.time);

                const formattedDate = date.toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                });

                let dateToDisplay = null;
                if(prevDate !== formattedDate){
                    prevDate = formattedDate;
                    dateToDisplay = <div className="pb-3 m-3">
                        <div className="flex justify-center relative border-b border-gray-400 p-3">
                            <h1 className="bg-white absolute pl-1 pr-1">{formattedDate}</h1>
                        </div>
                        </div>
                }

                return (
                    <div key={index} ref={index === chats.length-1 ? scrollRef : null} className="pb-2">
                    {dateToDisplay}
                        {chat.sender.self ? 
                <div className="grid grid-cols-12">
                    <div className="col-span-2"></div>
                    <div className="col-span-10 border rounded-s-xl rounded-tr-xl m-3 bg-blue-700" key={index}>
                        <div className="p-1 pl-2">
                            <h1 className="text-gray-200">{chat.message}</h1>
                        </div>
                    </div> 
                </div>
                        : 
                        <div className="grid grid-cols-12">
                        <div className="col-span-1">
                            <div className="relative inline-block">
                            <Image className="" borderRadius='full' boxSize='30px' src={chat.sender.image} alt='Dan Abramov' />
                            <Image className="bottom-0 right-0 absolute" boxSize='15px' src='/icons/check.png' alt='Verified' />
                            </div>
                        </div>
                            <div className="col-span-10 border rounded-b-xl rounded-r-xl m-1 bg-gray-200">
                                    <div className="p-1">
                                        <h1 className="text-gray-700 ">{chat.message}</h1>
                                    </div>
                            </div>
                        </div>
                        }
                    </div>
                );
            })}
        </div>
    )
}

export default Chats