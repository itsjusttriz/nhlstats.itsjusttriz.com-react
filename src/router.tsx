import { NotFound } from '@theturkeydev/gobble-lib-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './pages/App';
import { PageWrapper } from './pages/base/page-wrapper';

export const SiteRouter = () => (
    <Router>
        <PageWrapper>
            <Routes>
                <Route path='/' element={<App />} />

                <Route path='/*' element={<NotFound />} />
            </Routes>
        </PageWrapper>
    </Router>
);