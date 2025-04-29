import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg">
            <header className="py-3 px-6 bg-blue-900 text-white font-bold text-2xl">
                {categoria.nome}
            </header>
            <p className="p-8 text-3xl bg-blue-100 h-full text-blue-900">{categoria.descricao}</p>

            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className="w-full text-white bg-blue-500 hover:bg-blue-700
                        flex items-center justify-center py-3">
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`}
                    className="w-full text-white bg-red-500 hover:bg-red-700 
                        flex items-center justify-center py-3">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias;
