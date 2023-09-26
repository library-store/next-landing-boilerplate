import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import logo from '@/assets/svgs/logo.svg';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <header className="border-b border-gray-300">
        <div className="bg-black">
          <div className="m-auto w-9/12">Topbar</div>
        </div>

        <div className="m-auto w-9/12">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link href="/" title="tokyolife">
                <Image src={logo} width={192} height={20} alt="tokyfoLife" />
              </Link>
            </div>
            <nav>
              <ul className="flex flex-wrap text-xl">
                <li className="mr-6">
                  <Link
                    href="/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    href="/about/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Giới thiệu
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="m-auto w-9/12">
        <main className="content py-5 text-xl">{props.children}</main>
      </div>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        <div className="m-auto w-9/12">
          © Copyright {new Date().getFullYear()} Made By Phùng Anh
        </div>
      </footer>
    </div>
  );
};

export { Main };
