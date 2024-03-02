const ActionButtons = (): JSX.Element => {
  return (
    <>
      {/* スマホ */}
      <div className="sticky bottom-0 left-0 z-10 grid w-full grid-cols-2 md:hidden">
        <a
          href="#form"
          className="relative w-full border-2 border-accent bg-white py-3 text-center text-sm font-bold text-accent"
        >
          実際の素材サイトを見る
        </a>
        <a
          href="#form"
          className="relative w-full border-2 border-accent bg-accent py-3 text-center text-sm font-bold text-white"
        >
          資料請求
        </a>
        {/* <a
          href={process.env.NEXT_PUBLIC_UL_SITE_URL ?? '/'}
          className="relative w-full border-2 border-accent bg-accent py-3 text-center text-sm font-bold text-white"
        >
          無料トライアル
        </a> */}
      </div>

      {/* PC */}
      <div className="sticky bottom-0 left-0 z-10 hidden w-full items-center justify-center border-t-2 border-t-white bg-theme-light p-6 md:flex lg:py-6">
        <div className="grid grid-cols-2 gap-6">
          <a
            href="#form"
            className="relative rounded-full border-4 border-accent bg-white px-12 py-3 text-center text-xl font-bold text-accent shadow-[6px_6px_6px_#00000033] duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_10px_#00000033] lg:px-16"
          >
            実際の素材サイトを見る
          </a>
          <a
            href="#form"
            className="relative rounded-full border-4 border-accent bg-accent px-12 py-3 text-center text-xl font-bold text-white shadow-[6px_6px_6px_#00000033] duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_10px_#00000033] lg:px-16"
          >
            資料請求
          </a>
          {/* <a
            href={process.env.NEXT_PUBLIC_UL_SITE_URL ?? '/'}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-full border-4 border-accent bg-accent px-16 py-3 text-center text-xl font-bold text-white shadow-[6px_6px_6px_#00000033] duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_10px_#00000033] lg:px-20"
          >
            無料トライアル
            <MyImage
              src="/util/circle_arrow_icon.svg"
              width={32}
              height={32}
              alt=""
              className="absolute right-6 top-1/2 h-7 w-7 -translate-y-1/2"
            />
          </a> */}
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
