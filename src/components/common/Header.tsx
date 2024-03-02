import Image from 'next/image';
import Link from 'next/link';

import { Routes } from '@/lib/data/routes';

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-center py-6 shadow-sm">
      <Link href={Routes.INDEX.url}>
        <Image src="/logo/sozai_heaven.svg" width={240} height={48} alt="素材ヘブン" />
      </Link>
    </header>
  );
};

export default Header;
