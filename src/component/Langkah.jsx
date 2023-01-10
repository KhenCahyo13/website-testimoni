const Langkah = () => {
    return (
        <section className="px-4 py-4 mt-6 lg:px-16">
            <h1 className="text-center font-semibold lg:text-2xl">LANGKAH PEMESANAN JASA</h1>
            <p className="text-gray-400 text-sm text-center lg:text-base">Berikut langkah bagaimana cara untuk memesan jasa kami</p>
            {/* Card Group */}
            <div className="block md:flex md:items-center">
                <div className="mt-8 mx-4 md:columns-2 lg:gap-8 lg:mx-8">
                    <div className="card border border-gray-800 border-opacity-10">
                        <h1 className="font-semibold text-xl">Klik Tombol Hubungi Whatsapp</h1>
                        <p className="mt-1 text-sm text-gray-400 lg:text-base">Klik tombol tersebut untuk menghubungi admin dari jasa kami lewat aplikasi Whatsapp</p>
                        <h1 className="mt-6 text-xl text-gray-400 text-opacity-20">LANGKAH 1</h1>
                    </div>
                    <div className="card border border-gray-800 border-opacity-10 mt-6">
                        <h1 className="font-semibold text-xl">Tentukan Harga & Deadline</h1>
                        <p className="mt-1 text-sm text-gray-400 lg:text-base">Tentukan harga yang sesuai dengan kantong, tingkat kesulitan tugas, dan deadline tugas anda</p>
                        <h1 className="mt-6 text-xl text-gray-400 text-opacity-20">LANGKAH 2</h1>
                    </div>
                    <div className="card border border-gray-800 border-opacity-10 mt-6">
                        <h1 className="font-semibold text-xl">Konfirmasi Deal Untuk Pengerjaan</h1>
                        <p className="mt-1 text-sm text-gray-400 lg:text-base">Konfirmasi deal untuk pengerjaan tugas jika diskusi yang telah dilakukan terasa cocok</p>
                        <h1 className="mt-6 text-xl text-gray-400 text-opacity-20">LANGKAH 3</h1>
                    </div>
                    <div className="card border border-gray-800 border-opacity-10 mt-6">
                        <h1 className="font-semibold text-xl">Tentukan Sistem Pembayaran</h1>
                        <p className="mt-1 text-sm text-gray-400 lg:text-base">Tentukan sistem pembayaran yang menurut anda aman dan sesuai dengan keinginan anda</p>
                        <h1 className="mt-6 text-xl text-gray-400 text-opacity-20">LANGKAH 4</h1>
                    </div>
                </div>
                <div className="flex justify-end mt-4 md:block">
                    <img className="w-44 md:w-96" src="img/Smart.png" alt="Smart" />
                </div>
            </div>
        </section>
    )
}

export default Langkah;