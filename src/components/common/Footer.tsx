import Image from 'next/image';
import Link from 'next/link';

import { Routes } from '@/lib/data/routes';

const footerRouteList = [
  Routes.USER_GUIDE,
  Routes.TERMS,
  Routes.PRIVACY_POLICY,
  Routes.TOKUSHOHO,
  Routes.CONTACT,
  Routes.CONTACT_PARTNER,
  Routes.COMPANY,
];

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-theme-dark py-14 text-white sm:py-20">
      <div className="mb-10 flex justify-center">
        <Link href={Routes.INDEX.url}>
          <Image src="/logo/sozai_heaven_white.svg" width={200} height={32} alt="素材ヘブン" />
        </Link>
      </div>
      {/* ナビゲーション */}
      <nav>
        <ul className="flex flex-col flex-wrap items-center justify-center gap-6 px-6 md:flex-row md:items-start">
          {footerRouteList.map(({ key, title, url }) => (
            <li key={key}>
              <Link
                href={url}
                className="block text-sm duration-300 hover:opacity-70 md:text-base"
                target={url.includes('https://') ? '_blank' : ''}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <small className="mt-12 block text-center text-xs sm:mt-6">&copy; 2023 reterior</small>
    </footer>
  );
};

export default Footer;
