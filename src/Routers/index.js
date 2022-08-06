import Following from '../pages/Following';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import Error from '../pages/Error';

import headerOnly from '../Layout/HeaderOnly';
import NoLayout from '../Layout/NoLayout';

const publicRouter = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/upload', element: Upload, layout: headerOnly },
    { path: '/nolayout', element: Error, layout: NoLayout },
];
const priviteRouter = [];

export { publicRouter, priviteRouter };
