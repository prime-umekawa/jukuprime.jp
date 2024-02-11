//ルート間のクライアント側のトランジションを有効
import Link from "next/link";

//CommonImage, Container, ROUTES(lib/data/routes)をimport
import CommonImage from "@/components/common/parts/CommonImage";
import Container from "@/components/common/parts/Container";
import { ROUTES } from "@/lib/data/routes";

const Header = (): JSX.Element => {
  return (
    // headerタグを用意。クラスは以下
    // relative bg-primary py-4
    <header className="bg-primary relative py-4">
      <Container className="flex items-center">
        {/* ロゴ */}
        {/* リンクはROUTES.TOP */}
        <Link href={ROUTES.TOP}>
          {/* aタグで囲む */}
          <a>
            {/* 中身はCommonImage, 画像は /logo/sample_question.svgを参照*/}
            {/* 幅160, 高さ24, altタグは素材ヘブン */}
            <CommonImage src="/logo/sample_question.svg" width={160} height={24} alt="素材ヘブン" />
          </a>
        </Link>
      </Container>
    </header>
  );
};

//HeaderFCをexport
export default Header;
