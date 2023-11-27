import { Modal } from "@/components/Modal"

export const useModal = (title: string, content: string) => {

    return (
        <Modal title={title} content={content}/>
    )
}