import { Image } from '@douyinfe/semi-ui';
import { useTranslation } from 'react-i18next';
import { getLogo } from '../../helpers';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const logo = getLogo();

  let navItems = [
    {
      text: t('首页'),
      itemKey: 'home',
      to: '/',
    },
    {
      text: t('控制台'),
      itemKey: 'detail',
      to: '/',
    },
    {
      text: t('定价'),
      itemKey: 'pricing',
      to: '/pricing',
    },
    {
      text: t('关于'),
      itemKey: 'about',
      to: '/about',
    },
  ];

  return (
    <div className='bg-main-bg'>
      <footer className='max-w-7xl mx-auto py-4 flex items-center justify-between '>
        <div className='flex items-center gap-2'>
          <Image src={logo} />

          <p className='font-bold text-xl'>
            Duck<span className='font-normal'>AGI</span>
          </p>
        </div>

        <nav className='lg:flex hidden'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='px-3.5 text-xl text-gray-400'
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
