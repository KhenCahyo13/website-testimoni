import "../styles/Footer.css"

const Footer = () => {
    return (
        <section className="bg-blue-600 bg-opacity-5 px-4 pt-8 pb-6 mt-6 md:px-10 lg:px-16">
            <div className="block lg:flex lg:items-center lg:justify-between">
                <div className="lg:mr-10">
                    <img className="w-56 lg:w-72" src="img/Logo.png" alt="" />
                    <p className="w-72 mt-4 text-sm text-gray-400 lg:text-base lg:w-96">Hadir sebagai solusi bagi kamu yang pusing dalam mengerjakan tugas seputar Informatika dengan harga terjangkau dan yang jelas aman & terpercaya.</p>
                    <div className="flex gap-4 mt-4">
                        <a className="bg-blue-600 bg-opacity-20 rounded-full px-2 py-1" href="#facebook"><i className="fa-brands fa-facebook text-xl text-blue-600"></i></a>
                        <a className="bg-blue-600 bg-opacity-20 rounded-full px-2 py-1" href="#telegram"><i className="fa-brands fa-telegram text-xl text-blue-600"></i></a>
                        <a className="bg-blue-600 bg-opacity-20 rounded-full px-2 py-1" href="#instagram"><i className="fa-brands fa-instagram text-xl text-blue-600"></i></a>
                        <a className="bg-blue-600 bg-opacity-20 rounded-full px-2 py-1" href="#twitter"><i className="fa-brands fa-twitter text-xl text-blue-600"></i></a>
                    </div>
                </div>
                <div className="mt-12 lg:w-[50%]">
                    <h1 className="font-semibold text-lg lg:text-center lg:text-xl">KOTAK SARAN</h1>
                    <p className="mt-1 text-sm text-gray-400 lg:text-base lg:text-center">Berikan saran anda kepada kami untuk kemajuan jasa kami dan website kami kedepannya</p>
                    <form action="" className="mt-4">
                        <input type="text" className="form-control text-sm lg:text-base" placeholder="Masukkan nama anda" />
                        <input type="email" className="form-control mt-4 text-sm lg:text-base" placeholder="Masukkan email anda" />
                        <textarea className="form-control mt-4 text-sm lg:text-base" placeholder="Saran anda untuk kami" name="saran" id="saran" cols="30" rows="8"></textarea>
                        <button className="w-full py-2 text-sm text-center bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 text-white mt-4 lg:text-base">Kirim Saran</button>
                    </form>
                </div>
            </div>
            <hr className="mt-8 lg:mt-12" />
            <p className="mt-4 text-gray-400 text-xs text-center lg:text-left lg:text-sm">© 2022 JokiInformatikaYuk!  |  Dibuat oleh KhenCahyo</p>
        </section>
    )
}

export default Footer;