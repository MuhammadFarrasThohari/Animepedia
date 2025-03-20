import "../App.css";

const Header = () => {
    function tampilkanDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function (event) {
        if (
            !event.target.matches(".btn") &&
            !event.target.matches(".bi-list")
        ) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    };

    return (
        <header className="d-flex align-items-center justify-content-between">
            <h1 className="judul py-3 px-4">AnimePedia</h1>
            <div className="dropdown">
                <button className="btn mx-3" onClick={tampilkanDropdown}>
                    <i
                        className="bi bi-list"
                        style={{ fontSize: "1.5rem" }}
                    ></i>
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="/">Cari Anime</a>
                    <a href="/input">Input Anime</a>
                    <a href="/edit">Edit Anime</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
