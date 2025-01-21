import HeaderBar from '../HeaderBar';
import Announcement from '../common/Announcement';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';

export default function PublicLayout({ children }) {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <HeaderBar />
      <Announcement />
      <main className='flex-1 bg-main-bg'>
        <Outlet />
      </main>
      <Announcement reverse />
      <Footer />
    </div>
  );
}
