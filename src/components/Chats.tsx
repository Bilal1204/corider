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
                        <div className="flex justify-center relative border-b border-[#B7B7B7] p-3">
                            <h1 className="bg-[#FAF9F4] text-[#B7B7B7] absolute pl-1 pr-1">{formattedDate}</h1>
                        </div>
                        </div>
                }

                return (
                    <div key={index} ref={index === chats.length-1 ? scrollRef : null} className="pb-1">
                    {dateToDisplay}
                        {chat.sender.self ? 
                <div className="grid grid-cols-12">
                    <div className="col-span-2"></div>
                    <div className="col-span-10 border rounded-s-xl rounded-tr-xl m-3 bg-[#1C63D5]" key={index}>
                        <div className="p-1 pl-2">
                            <p className="text-[#FFFFFF]">{chat.message}</p>
                        </div>
                    </div> 
                </div>
                        : 
                        <div className="grid grid-cols-12 mb-3">
                        <div className="col-span-1">
                            <div className="relative inline-block">
                            <Image className="" borderRadius='full' boxSize='30px' src={chat.sender.image} alt='Dan Abramov' />
                            <Image className="bottom-0 right-0 absolute" boxSize='15px' src='/icons/check.png' alt='Verified' />
                            </div>
                        </div>
                            <div className="col-span-10 shadow-md border rounded-b-xl rounded-r-xl m-1 bg-[#FFFFFF]">
                                    <div className="p-1">
                                        <p className="text-[#606060]">{chat.message}</p>
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