import Following from '../pages/Following';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import Error from '../pages/Error';

import DefaultLayout from '../components/Layout/DefaultLayout';
import headerOnly from '../components/Layout/HeaderOnly';
import NoLayout from '../components/Layout/NoLayout';

const publicRouter = [
    { path: '/', element: Home, layout: DefaultLayout },
    { path: '/following', element: Following, layout: DefaultLayout },
    { path: '/upload', element: Upload, layout: headerOnly },
    { path: '/nolayout', element: Error, layout: NoLayout },
];
const priviteRouter = [];

export { publicRouter, priviteRouter };
