import { Outlet } from 'react-router-dom';
import AuthHeader from '../AuthHeader';

export default function AuthLayout() {
  return (
    <div className='relative grid grid-rows-[auto,1fr] min-h-screen'>
      <AuthHeader />
      <main className='flex-1 bg-main-bg'>
        <Outlet />
      </main>
    </div>
  );
}
