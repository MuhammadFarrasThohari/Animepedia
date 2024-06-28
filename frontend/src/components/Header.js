import "../App.css";

const Header = () => {
    return (
        <header className="d-flex align-items-center justify-content-between">
            <h1 className="judul py-3 px-4">AnimePedia</h1>
            <div class="dropdown mx-4">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="/">
                            Input Anime
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/">
                            Edit Anime
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/">
                            Search Anime
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
