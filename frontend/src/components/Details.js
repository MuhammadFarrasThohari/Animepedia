const Details = ({ title }) => {
    return (
        <main className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src="https://placehold.co/500"
                        className="img-fluid"
                        alt="Anime 1"
                    />
                </div>
                <div className="col-md-8">
                    <div className="container">
                        <h1 className="my-4">{title}</h1>
                        <h2>Deskripsi Anime</h2>
                        <p>Jumlah Episode</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Details;
