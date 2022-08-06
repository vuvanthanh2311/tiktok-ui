import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to={'/'}> Home page</Link>
                </li>
                <li>
                    <Link to={'/following'}> Following page</Link>
                </li>
                <li>
                    <Link to={'/upload'}> Upload page</Link>
                </li>
                <li>
                    <Link to={'/error'}> Error page</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
