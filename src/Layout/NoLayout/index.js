function NoLayout({ children }) {
    return (
        <div>
            <div className="container">
                <div>{children}</div>
            </div>
        </div>
    );
}

export default NoLayout;
