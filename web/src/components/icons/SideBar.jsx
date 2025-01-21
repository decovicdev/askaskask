import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '../ui/sidebar';
import Logo from './Logo';
import BarChart from '../icons/BarChart';
import Message from '../icons/Message';
import ArrowBackWards from '../icons/ArrowBackWards';
import Wallet from '../icons/Wallet';
import List from '../icons/List';
import Image from '../icons/Image';
import Globe from '../icons/Globe';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: BarChart,
  },
  {
    title: 'Chat',
    url: '/chat',
    icon: Message,
  },
  {
    title: 'Tokens',
    url: '/tokens',
    icon: ArrowBackWards,
  },
  {
    title: 'Wallet',
    url: '/wallet',
    icon: Wallet,
  },
  {
    title: 'Logs',
    url: '/logs',
    icon: List,
  },
  {
    title: 'Drawing',
    url: '/drawing',
    icon: Image,
  },
  {
    title: 'Async Task',
    url: '/async-task',
    icon: Globe,
  },
];

export default function SideBar() {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='bg-background'>
        <div className='flex items-center'>
          <div className='mr-3 lg:mr-0'>
            <Logo />
          </div>
          <div
            className='font-bold text-foreground/60 text-xl hidden lg:block font-poppins
           group-data-[collapsible=icon]:hidden
          '
          >
            Duck<span className='font-light'>AGI</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarRail />

      <SidebarContent className='bg-background'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key={'Playground'}>
                <SidebarMenuButton asChild>
                  <Link to={'/playground'}>
                    <span>{'Playground'}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Chat shortcuts</SidebarGroupLabel>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
