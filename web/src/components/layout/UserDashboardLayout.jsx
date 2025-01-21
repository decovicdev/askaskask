import { Outlet } from 'react-router-dom';
import SideBar from '../common/SideBar';
import DashboardHeader from '../common/DashboardHeader';
import { SidebarProvider } from '../ui/sidebar';

export default function UserDashboardLayout() {
  return (
    <SidebarProvider>
      <div className='relative flex min-h-screen text-foreground w-full bg-background'>
        <SideBar />

        <main className='flex-1 bg-muted grid grid-rows-[auto,1fr] overflow-hidden'>
          <DashboardHeader />
          <div className='lg:m-5 h-full'>
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
