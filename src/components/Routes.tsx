import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layout/defaultLayout';
import { Banner } from './Banner';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}> 
                <Route path="/" element={<Banner />}/>
            </Route>
        </Routes>
    )
}