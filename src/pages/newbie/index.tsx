import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';

import { useThemeContext } from '@/context/ThemeContext';

import CardThumbLight from '@/assets/img/review-card/review-card-light.png';
import CardThumbDark from '@/assets/img/review-card/review-card-dark.png';

const Newbie: NextPage = () => {
  const { darkMode } = useThemeContext();
  return (
    <MainLayout>
      <div className="min-h-[100vh]  pt-10">
        <div className="flex max-w-lg mx-auto justify-center flex-wrap gap-2">
          <Link href="newbie/product-card">
            <div className="overflow-hidden cursor-pointer rounded shadow relative">
              <Image
                src={darkMode ? CardThumbDark : CardThumbLight}
                alt="Thumbnail link to Review Card Component"
                className="h-[20rem] w-auto hover:scale-[1.1] transition-all duration-700"
                quality={100}
                placeholder="blur"
              />
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Newbie;
