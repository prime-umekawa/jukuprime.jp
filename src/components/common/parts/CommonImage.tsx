//nextのimageからImageコンポーネントとImageのprops型をimport,
import Image, { ImageProps } from "next/image";

//BLUR_DATA_URLをexportで定義
//値はdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhSURBVHgB7coxAQAACAJBtH/Wr6AVGBi5+QY4GVamxkx8GFID3TwM+SAAAAAASUVORK5CYII=
//何に使うやつ??
export const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhSURBVHgB7coxAQAACAJBtH/Wr6AVGBi5+QY4GVamxkx8GFID3TwM+SAAAAAASUVORK5CYII=";

//MyImageのpropsを型定義。ImagePropsに加えて、altとdivのPropsを許容する
type MyImageProps = ImageProps & {
  alt: string;
  //divAttとかのがよくない？
  divProps?: React.HTMLAttributes<HTMLDivElement>;
};

//CommonImage関数を定義。
const CommonImage = (props: MyImageProps): JSX.Element => {
  //divProps, alt, と残りimagePropsを受けとる
  const { divProps, alt, ...imageProps } = props;
  return (
    //divタグで複数のdivProps,
    //styleは letterSpacing: 0, wordSpacing: 0, fontSize: 0
    //を受け取る
    //その子要素としてImageコンポーネントをとる。propsは複数のimagePropsとaltタグの実値
    //styleはオブジェクト形式だが、jsx中で{}はjsとしての記述になるため、{{}}とする必要がある
    <div {...divProps} style={{ letterSpacing: 0, wordSpacing: 0, fontSize: 0 }}>
      <Image {...imageProps} alt={alt} />
    </div>
  );
};
//defaultでexport
export default CommonImage;

//このコンポーネントの使い方例:

//<CommonImage src="/logo/sample_question.svg" width={160} height={24} alt="素材ヘブン" />
