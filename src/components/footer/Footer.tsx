import { GithubLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center  bg-blue-500 text-white ">
                <div className="container flex flex-col items-center  py-4">
                    <p className='text-xl font-poppins font-bold '>
                            Farmalive | Copyright: {data}
                        </p>
                    <p className='text-lg text-white font-poppins font-bold'>Para mais projetos acesse! </p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/ThainaraCruz" target="_blank">
                    <GithubLogo size={32} weight='bold' />
                    </a>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Footer