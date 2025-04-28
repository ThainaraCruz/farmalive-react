import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert('A categoria foi atualizada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    console.error('Id não encontrado.');
                } else {
                    alert('Erro ao atualizar a categoria.');
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert('A categoria foi cadastrada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    console.error('Acesso não autorizado.');
                } else {
                    alert('Erro ao cadastrar a categoria.');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-blue-900 font-bold text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-full max-w-md bg-blue-100 p-8 rounded-2xl shadow-md flex flex-col gap-6" onSubmit={gerarNovoCategoria}>
            <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-blue-900 font-semibold">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui o nome da categoria"
                        name="nome"
                        className="border-2 border-blue-700 rounded p-3 bg-white text-blue-900"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-blue-900 font-semibold">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name="descricao"
                        className="border-2 border-blue-700 rounded p-3 bg-white text-blue-900"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-3 flex justify-center items-center"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
