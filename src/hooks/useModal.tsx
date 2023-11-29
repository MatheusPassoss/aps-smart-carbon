

import { Modal } from "@/components/Modal"



export const useModal = () => {


    const renderModal = (title: string, content: string) => {
   
        return <Modal title={title} content={content} />
    }

    return {renderModal}

}