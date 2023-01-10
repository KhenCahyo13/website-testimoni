import "../styles/Hero.css"

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="lg:w-full">
                <h1 className="font-semibold text-2xl lg:text-5xl">SELAMAT DATANG DI</h1>
                <h1 className="font-semibold text-2xl lg:text-5xl">Joki<span className="text-blue-600">Informatika</span>Yuk!</h1>
                <p className="mt-[4px] w-64 text-sm text-gray-400 md:w-72 lg:text-lg lg:w-[26rem]">Pusing mikirin tugas Informatika kamu.? disini solusinya. Dimana kamu bisa mengerjakan tugas Informatikamu dengan mudah, biaya murah, dan terpercaya.</p>
                <div className="mt-6 flex gap-2 items-center">
                    <button className="btn-testi">Testimoni</button>
                    <button className="btn-hubungi">Hubungi Whatsapp</button>
                </div>
            </div>
            <img id="devPict" className="-z-10 float-right w-72 mt-10 md:float-none md:mt-0 md:w-80 lg:w-1/2" src="img/Developer.png" alt="Developer" />
        </section>
    )
}

export default Hero