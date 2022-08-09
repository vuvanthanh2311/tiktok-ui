import { Routes, Route } from 'react-router-dom';
import { publicRouter } from './Routers';

function App() {
    return (
        <div>
            <Routes>
                {publicRouter.map((route, index) => {
                    const Page = route.element;
                    let Layout = route.layout;

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
