import "../styles/Kenapa.css"

const Kenapa = () => {
    return (
        <section className="kenapa-wrapper">
            <h1 className="font-semibold text-lg text-center lg:text-2xl">KENAPA HARUS MEMILIH Joki<span className="text-blue-600">Informatika</span>Yuk.?</h1>
            <div className="kenapa-content">
                {/* Card Group */}
                <div className="mt-8 mx-4 md:columns-2">
                    <div className="card">
                        <div className="bg-blue-600 w-fit rounded-md bg-opacity-20 px-6 py-2 mx-auto block">
                            <i className="fa-solid fa-dollar-sign text-blue-600 text-xl"></i>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-blue-600 text-center text-lg font-medium lg:text-xl">Harga Murah</h1>
                            <p className="text-sm text-gray-400 text-center lg:text-base">Harga yang bisa dibicarakan sesuai dengan budget pelanggan.</p>
                        </div>
                    </div>  
                    <div className="card mt-8">
                        <div className="bg-blue-600 w-fit rounded-md bg-opacity-20 px-6 py-2 mx-auto block">
                            <i className="fa-solid fa-star text-blue-600 text-xl"></i>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-blue-600 text-center text-lg font-medium lg:text-xl">Aman & Terpercaya</h1>
                            <p className="text-sm text-gray-400 text-center lg:text-base">Jasa kami bisa sangat dipercaya dan terjamin aman tanpa adanya penipuan.</p>
                        </div>
                    </div>  
                    <div className="card mt-8">
                        <div className="bg-blue-600 w-fit rounded-md bg-opacity-20 px-6 py-2 mx-auto block">
                            <i className="fa-solid fa-handshake text-blue-600 text-xl"></i>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-blue-600 text-center text-lg font-medium lg:text-xl">Metode Pembayaran</h1>
                            <p className="text-sm text-gray-400 text-center lg:text-base">Metode pembayaran yang sesuai dengan keinginan pelanggan kami.</p>
                        </div>
                    </div>  
                    <div className="card mt-8">
                        <div className="bg-blue-600 w-fit rounded-md bg-opacity-20 px-6 py-2 mx-auto block">
                            <i className="fa-solid fa-bolt text-blue-600 text-xl"></i>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-blue-600 text-center text-lg font-medium lg:text-xl">Pengerjaan Cepat</h1>
                            <p className="text-sm text-gray-400 text-center lg:text-base">Pengerjaan tugas yang cepat dari kami sesuai dengan deadline pelanggan kami.</p>
                        </div>
                    </div>  
                </div>
                <img className="w-56 mt-8 md:h-72 lg:h-full lg:w-80" src="img/Working.png" alt="Working" />
            </div>
        </section>
    )
}

export default Kenapa;