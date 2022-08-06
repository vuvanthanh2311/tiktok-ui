import Header from '../DefaultLayout/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <div className="nav">
                <Header />
            </div>
            <div className="container">
                <div>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
