
import { Fieldset } from './Fieldset';
import { AutocompleteNav } from './AutocompleteNav';

export const MapNav = () => {

    return (
        <aside className={`container m-auto flex flex-col overflow-hidden`}>
            <aside className='pb-5 w-full max-xl:m-auto px-3'>
                <h2 className='text-2xl text-white font-semibold '>Informações sobre minha rota</h2>
                <p className='pb-14 text-white'>Descubra quanto uma rota emite de carbono</p>
                <h4 className="pt-5 text-lg text-white max-md:text-center">Selecione o meio de transporte</h4>
                <Fieldset />
                <AutocompleteNav />
            </aside>
        </aside>
    )

}