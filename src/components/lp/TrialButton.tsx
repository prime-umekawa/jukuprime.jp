import MyImage from '@/components/common/parts/MyImage';

const TrialButton = (): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-center bg-theme-light px-6 py-8 md:py-12 lg:py-16 xl:py-20">
      <a
        href={process.env.NEXT_PUBLIC_UL_SITE_URL ?? '/'}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full rounded-full bg-accent px-10 py-4 text-center text-base font-bold text-white shadow-[6px_6px_6px_#00000033] duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_10px_#00000033] sm:w-auto sm:px-40 sm:py-6 sm:text-2xl xl:text-3xl"
      >
        無料トライアル
        <MyImage
          src="/util/circle_arrow_icon.svg"
          width={32}
          height={32}
          alt=""
          className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 sm:right-6 sm:h-8 sm:w-8 xl:h-10 xl:w-10"
        />
      </a>
    </div>
  );
};

export default TrialButton;
