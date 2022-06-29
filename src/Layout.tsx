import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
}
