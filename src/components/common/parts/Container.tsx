/* Container について
 *  max-width とページ左右の余白を設定した共通コンポーネント
 *  コンポーネントを作るときは基本的にこのコンポーネントで囲う
 *  Container の中で Container を使うと余白がずれるので気をつける
 */
//propsの型定義
//maxWidth: max-w-string[optional]
//children: 型はわかるね。
type Props = React.HTMLAttributes<HTMLDivElement> & {
  maxWidth?: `max-w-${string}`;
  children: React.ReactNode;
};

const Container = (props: Props): JSX.Element => {
  //上記2つとCN, のこりdivがとりうる属性
  const { maxWidth, children, className = "", ...divHTMLAttributes } = props;

  return (
    //div要素中で複数の属性、CN:px-4 md:px-8とmaxWidthがあればmx-autoとmaxWidth,なければw-full
    //追加でclassName(あれば)
    <div
      {...divHTMLAttributes}
      className={`px-4 md:px-8 ${maxWidth ? `mx-auto ${maxWidth}` : "w-full"} ${className}`}
    >
      {/* divタグの中に子要素をpropsとして受け取る */}
      {children}
    </div>
  );
};

export default Container;
