import "../styles/Navbar.css"

const Navbar = () => {
    const showMenu = () => {
        document.getElementById('line1').classList.toggle('line1')
        document.getElementById('line2').classList.toggle('line2')
        document.getElementById('line3').classList.toggle('line3')
        document.getElementById('navMenu').classList.toggle('-translate-x-0')
    }

    window.onscroll = () => {
        const header = document.querySelector('header')

        if (window.pageYOffset > 150) {
            header.classList.add('nav-fixed')
        } else {
            header.classList.remove('nav-fixed')
        }
    }

    return (
        <header>
            <nav className="w-full h-fit px-4 py-4 flex justify-between items-center md:px-10 lg:px-16">
                <img className="w-40 md:w-52 lg:w-56" src="img/Logo.png" alt="Logo" />
                {/* Toggle Button Navbar */}
                <div onClick={showMenu} className="cursor-pointer md:hidden">
                    <span id="line1" className="hamburger-line transition duration-300"></span>
                    <span id="line2" className="hamburger-line mt-[5px] transition duration-300"></span>
                    <span id="line3" className="hamburger-line mt-[5px] transition duration-300"></span>
                </div>
                {/* Menu */}
                <ul id="navMenu" className="nav-menu -translate-x-96">
                    <li className="nav-link transition duration-300"><a href="#beranda">BERANDA</a></li>
                    <li className="nav-link transition duration-300 mt-3 md:mt-0"><a href="#testimoni">TESTIMONI</a></li>
                    <li className="nav-link transition duration-300 mt-3 md:mt-0"><a href="#lainnya">LAINNYA</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;