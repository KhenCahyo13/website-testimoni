const Testimoni = () => {
    return (
        <section className="px-4 py-4 mt-6 lg:px-16">
            <h1 className="text-lg font-semibold text-center lg:text-2xl">TESTIMONI</h1>
            <p className="mt-1 text-sm text-gray-400 text-center lg:text-base">Kumpulan testimoni kami sebagai bukti bahwa kami membuka jasa tanpa adanya unsur pernipuan</p>
            {/* Card Group */}
            <div className="mt-8 mx-4 md:columns-3 lg:gap-8 lg:mx-8">
                <div className="card border border-opacity-10 border-gray-800">
                    <img className="w-24 mx-auto block md:w-10 lg:w-16" src="img/Website.png" alt="Website" />
                    <div className="mt-2 md:mt-4">
                        <h1 className="font-semibold text-lg text-center md:text-sm lg:text-lg">Pemrograman Website</h1>
                        <p className="mt-1 text-sm text-center text-gray-400 md:text-xs lg:text-base">Testimoni pengerjaan tugas seputar Pemrograman Website</p>
                    </div>
                </div>
                <div className="card border border-opacity-10 border-gray-800 mt-8">
                    <img className="w-24 mx-auto block lg:w-[150px]" src="img/Java.png" alt="Android" />
                    <div className="mt-2 md:mt-4">
                        <h1 className="font-semibold text-lg text-center md:text-sm lg:text-lg">Pemrograman Android</h1>
                        <p className="mt-1 text-sm text-center text-gray-400 md:text-xs lg:text-base">Testimoni pengerjaan tugas seputar Pemrograman Android</p>
                    </div>
                </div>
                <div className="card border border-opacity-10 border-gray-800 mt-8">
                    <img className="w-24 mx-auto block md:w-16 lg:w-[104px]" src="img/Mysql.png" alt="Basis Data" />
                    <div className="mt-2 md:mt-4">
                        <h1 className="font-semibold text-lg text-center md:text-sm lg:text-lg">Basis Data</h1>
                        <p className="mt-1 text-sm text-center text-gray-400 md:text-xs lg:text-base">Testimoni pengerjaan tugas seputar Basis Data atau Database</p>
                    </div>
                </div>
            </div>
            <button className="btn-testi mx-auto block mt-8 md:mt-4">Testimoni Lainnya</button>
        </section>
    )
}

export default Testimoni