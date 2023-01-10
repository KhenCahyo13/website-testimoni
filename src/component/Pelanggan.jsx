const Pelanggan = () => {
    return (
        <section className="w-full px-4 py-6 bg-blue-600 bg-opacity-5 mt-6 lg:py-8 lg:px-16">
            <h1 className="text-center font-semibold lg:text-2xl">APA KATA PELANGGAN KAMI.?</h1>
            <p className="mt-1 text-center text-gray-400 text-sm lg:text-base">Pendapat pelanggan kami tentang bagaimana pelayanan yang kami berikan kepada mereka</p>
            {/* Card Group */}
            <div className="mt-8 mx-4 md:columns-3 lg:gap-6 lg:mx-10">
                <div className="card">
                    <h1 className="text-blue-600 text-lg font-semibold lg:text-xl">~ Ahmad Ali</h1>
                    <p className="text-sm text-gray-400 lg:text-base">Pemrograman Website</p>
                    <p className="text-sm mt-2 lg:text-base">"Pengerjaan sangat cepat dan tepat waktu sesuai dengan deadline yang diberikan. Harga.? hmm cukup murah sesuai kantong. Rekomended deh"</p>
                </div>
                <div className="card mt-6">
                    <h1 className="text-blue-600 text-lg font-semibold lg:text-xl">~ Julia Melisa</h1>
                    <p className="text-sm text-gray-400 lg:text-base">Pemrograman Mobile</p>
                    <p className="text-sm mt-2 lg:text-base">"Pengerjaan sangat cepat dan tepat waktu sesuai dengan deadline yang diberikan. Harga.? hmm cukup murah sesuai kantong. Rekomended deh"</p>
                </div>
                <div className="card mt-6">
                    <h1 className="text-blue-600 text-lg font-semibold lg:text-xl">~ Salsabila</h1>
                    <p className="text-sm text-gray-400 lg:text-base">Basis Data</p>
                    <p className="text-sm mt-2 lg:text-base">"Pengerjaan sangat cepat dan tepat waktu sesuai dengan deadline yang diberikan. Harga.? hmm cukup murah sesuai kantong. Rekomended deh"</p>
                </div>
                <div className="card mt-6">
                    <h1 className="text-blue-600 text-lg font-semibold lg:text-xl">~ Zilan Zalilan</h1>
                    <p className="text-sm text-gray-400 lg:text-base">Pemrograman Website</p>
                    <p className="text-sm mt-2 lg:text-base">"Pengerjaan sangat cepat dan tepat waktu sesuai dengan deadline yang diberikan. Harga.? hmm cukup murah sesuai kantong. Rekomended deh"</p>
                </div>
                <div className="card mt-6">
                    <h1 className="text-blue-600 text-lg font-semibold lg:text-xl">~ Nopi Putri</h1>
                    <p className="text-sm text-gray-400 lg:text-base">Pemrograman Mobile</p>
                    <p className="text-sm mt-2 lg:text-base">"Pengerjaan sangat cepat dan tepat waktu sesuai dengan deadline yang diberikan. Harga.? hmm cukup murah sesuai kantong. Rekomended deh"</p>
                </div>
                <div className="card mt-6">
                    <h1 className="text-blue-600 text-lg font-semibold lg:text-xl">~ Rama</h1>
                    <p className="text-sm text-gray-400 lg:text-base">Basis Data</p>
                    <p className="text-sm mt-2 lg:text-base">"Pengerjaan sangat cepat dan tepat waktu sesuai dengan deadline yang diberikan. Harga.? hmm cukup murah sesuai kantong. Rekomended deh"</p>
                </div>
            </div>
            <button className="btn-testi mx-auto block mt-8">Cek Pelanggan Lain</button>
        </section>
    )
}

export default Pelanggan;