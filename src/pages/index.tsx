import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import ActionButtons from '@/components/lp/ActionButtons';
import LPForm from '@/components/lp/LPForm';
import ResponsiveLPImage from '@/components/lp/ResponsiveLPImage';
import TrialButton from '@/components/lp/TrialButton';
import { Routes } from '@/lib/data/routes';

const Home: NextPage = () => {
  return (
    <Layout path={Routes.INDEX.url} title={Routes.INDEX.title} noTitleTemplate isTopPage>
      <div className="relative">
        <ResponsiveLPImage
          pcImageSrc="/lp/pc1_2740x1400.png"
          spImageSrc="/lp/010_SP_750x1305.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC2_2740x2792.png"
          spImageSrc="/lp/020_SP_750x2699.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC3_2740x1455.png"
          spImageSrc="/lp/030_SP_750x357.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC4_2740x1745.png"
          spImageSrc="/lp/040_SP_750x957.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC5_2740x3900.png"
          spImageSrc="/lp/050_SP_750x3065.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/060_PC_2740x4998.png"
          spImageSrc="/lp/060_SP_750x3287.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/070_PC_2740x3090.png"
          spImageSrc="/lp/070_SP_750x3207.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/080_PC_2740x1820.png"
          spImageSrc="/lp/080_SP_750x2660.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/090_PC_2740x3150.png"
          spImageSrc="/lp/090_SP_750x3040.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/100_PC_2740x2574.png"
          spImageSrc="/lp/100_SP_750x1924.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/110_PC_2740x4272.png"
          spImageSrc="/lp/110_SP_750x3144.png"
        />

        {/* 画面下に固定するボタン */}
        <ActionButtons />
      </div>

      {/* フォーム */}
      <div id="form">
        <ResponsiveLPImage
          pcImageSrc="/lp/120_PC_2740x618.png"
          spImageSrc="/lp/120_SP_750x348.png"
        />
        <LPForm />
      </div>

      <ResponsiveLPImage pcImageSrc="/lp/130_PC_2740x868.png" spImageSrc="/lp/130_SP_750x520.png" />
      <TrialButton />
    </Layout>
  );
};

export default Home;
