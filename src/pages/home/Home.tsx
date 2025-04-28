import ListarCategorias from '../../components/categoria/listacategorias/ListaCategoria'

function Home() {
  return (
    <>
      <div className="bg-blue-100 flex flex-col justify-between gap-1 ">
        <div className="flex justify-center py-8">
          <div className="container grid grid-cols-1 lg:grid-cols-2 text-blue-900 py-4 px-4 lg:px-0">
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
              <p className="text-xl italic">
              Cuidar da sua saúde é a nossa maior receita.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="https://ik.imagekit.io/juxtrzw47/logofarmalive.png?updatedAt=1745871820290"
                alt="Imagem Página Home"
                className='w-2/3'
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-900 py-4 px-4">
          <h3 className="text-3xl text-center font-bold text-white mb-6">
            Categorias em Destaque
          </h3>
        </div>
      </div>
      <ListarCategorias />
    </>
  )
}

export default Home
