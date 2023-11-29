'use client'
import Link from 'next/link';
import { Input } from './UI/Input';
import { Button } from './UI/Button';
import { Autocomplete } from '@react-google-maps/api';
import { useApi } from '@/hooks/useApi';
import { MapContext } from '../context/MapContext';
import { useRef, useContext, useState } from 'react';
import { useRenderMap } from '@/hooks/useRenderMap';
import { ArrowCircleDown } from '@phosphor-icons/react';
import { Modal } from './Modal';
import { useModal } from '@/hooks/useModal';

export const AutocompleteNav = () => {


    const originRef = useRef<HTMLInputElement>(null)
    const destinationRef = useRef<HTMLInputElement>(null)
    const { vehicle, hasRoute, isInvalid, setisInvalid } = useContext(MapContext)

    const { isLoaded } = useApi();
    const { calculateRoute } = useRenderMap()
    const { renderModal } = useModal()
    const [modalContent, setModalContent] = useState<any>();



    const ValidationDataOfRequest = () => {

        let title
        let content

        if (isInvalid) {
            title = 'Ops... Houve algum erro!'
            content = 'Não foi possível traçar a rota definida, verifique os endereços selecionados e tente novamente.'
            setModalContent(renderModal(title, content))
        }


        if (!originRef.current?.value) {
            // title = 'Origem inválida!'
            // content = 'A origem da rota está vazia ou foi digitada incorretamente. Digite a origem para prosseguir que seja possível traçar sua rota.'
            title = 'Ops... Houve algum erro!'
            content = 'Não foi possível traçar a rota definida, verifique os endereços selecionados e tente novamente.'
            setisInvalid(true)
            setModalContent(renderModal(title, content))
        }

        if (!destinationRef.current?.value) {
            setisInvalid(true)
            // title = 'Destino inválido!'
            // content = 'O Destino da rota está vazia ou foi digitada incorretamente. Digite a origem para prosseguir que seja possível traçar sua rota.'
            title = 'Ops... Houve algum erro!'
            content = 'Não foi possível traçar a rota definida, verifique os endereços selecionados e tente novamente.'
            setModalContent(renderModal(title, content))
        }

        if (originRef.current?.value && destinationRef.current?.value && vehicle) {
            calculateRoute(originRef.current?.value, destinationRef.current?.value, vehicle);
        }

    }

    if (!isLoaded) {

        return (
            <>
                <label className="text-white">Origem</label>
                <div className='w-full pb-3 pt-1'>
                    <Input isDisabled disabled placeholder='Carregando...' />
                </div>

                <label className="text-white">Destino</label>
                <div className='w-full pb-5 pt-1'>
                    <Input isDisabled disabled placeholder='Carregando...' />
                </div>
                <div className={`w-full ${hasRoute && "flex flex-col gap-5 md:flex-row"}`}>
                    <Button Title={"Carregando..."} onClick={() => { ValidationDataOfRequest() }} disabled />
                    {hasRoute &&
                        (<Link href={"#info"} className='w-full'>
                            <Button Title={"Conferir informações"} RightIcon Icon={ArrowCircleDown} />
                        </Link>)}
                </div>

            </>
        )
    }

    return (
        <>
            <label className="text-white">Origem</label>
            <Autocomplete className='w-full pb-3 pt-1' restrictions={{ country: 'br' }}>
                <Input inputRef={originRef} />
            </Autocomplete>
            <label className="text-white">Destino</label>
            <Autocomplete className='w-full pb-5 pt-1' restrictions={{ country: 'br' }}>
                <Input inputRef={destinationRef} />
            </Autocomplete>

            <div className={`w-full ${hasRoute && "flex flex-col gap-5 md:flex-row"}`}>
                <Button Title={"Traçar nova rota"} onClick={() => { ValidationDataOfRequest() }} />
                {hasRoute &&
                    (<Link href={"#info"} className='w-full'>
                        <Button Title={"Conferir informações"} RightIcon Icon={ArrowCircleDown} />
                    </Link>)}
            </div>

            {isInvalid && modalContent}
        </>
    )
}