import { Routes, Route } from 'react-router-dom';
import { publicRouter } from './Routers';
import DefaultLayout from './Layout/DefaultLayout';

function App() {
    return (
        <div>
            <Routes>
                {publicRouter.map((route, index) => {
                    const Page = route.element;

                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
