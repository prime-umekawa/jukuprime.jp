//react-iconsからIconTypeをimport
import { IconType } from "react-icons";

//react-iconsのimからImSpinner7をimport
import { ImSpinner7 } from "react-icons/im";

/**
 * Props:
 *   variant : ボタンのスタイルのタイプ: primary, secondary, error, error-secondary, text
 *   label   : ボタンのテキスト
 *   Icon    : React Icon のアイコン [optional]
 *   loading : ローディング状態
 */

//ButtonのPropsの型定義。HTMLのButton属性に拡張して、variant, labe, Icon[optional], loading[optional]を加える
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "error" | "error-secondary" | "text";
  label: string;
  Icon?: IconType;
  loading?: boolean;
};

// ボタン本体
//Buttonの関数コンポーネントを定義
const Button = (props: ButtonProps): JSX.Element => {
  //propsを設定。上記のPros要素に加え、クラスと、あふれた分をHTMLのbutton属性として受け入れる
  //
  const { variant, label, Icon, loading, className = "", ...buttonHTMLAttributes } = props;

  // variant でボタンの色を分岐
  /*primary, secondary, error, error-secondary, textの順に
   *border-primary bg-primary text-white disabled:border-theme-medium disabled:bg-theme-medium
   *border-primary bg-white text-primary disabled:border-theme-medium disabled:text-theme-medium
   * border-error bg-error text-white disabled:border-theme-medium disabled:bg-theme-medium
   *border-error bg-white text-error disabled:border-theme-medium disabled:text-theme-medium
   * border-transparent bg-transparent text-primary hover:border-theme-light hover:bg-theme-light disabled:border-transparent disabled:bg-transparent disabled:text-theme-medium
   * ただしtextについてはloadingの場合のみ!bg-theme-light
   *
   * */
  const btnColor =
    variant === "primary"
      ? "border-primary bg-primary text-white disabled:border-theme-medium disabled:bg-theme-medium"
      : variant === "secondary"
      ? "border-primary bg-white text-primary disabled:border-theme-medium disabled:text-theme-medium"
      : variant === "error"
      ? "border-error bg-error text-white disabled:border-theme-medium disabled:bg-theme-medium"
      : variant === "error-secondary"
      ? "border-error bg-white text-error disabled:border-theme-medium disabled:text-theme-medium"
      : variant === "text"
      ? `border-transparent bg-transparent text-primary hover:border-theme-light hover:bg-theme-light disabled:border-transparent disabled:bg-transparent disabled:text-theme-medium ${
          loading ? "!bg-theme-light" : ""
        }`
      : "";

  // Component
  return (
    <>
      <button
        {...buttonHTMLAttributes} //HTML属性と以下のCNを追加:
        //relative flex items-center justify-center gap-1 rounded-md border py-2 px-4 text-center text-btn transition-all duration-200 ease-linear hover:opacity-70 disabled:opacity-100
        //loading=trueの時は以下も追加
        //opacity-70 [&>span]:!text-transparentも追加
        //あと、btnColorとpropsのCNも受け取れるようにする
        className={`text-btn relative flex items-center justify-center gap-1 rounded-md border px-4 py-2 text-center transition-all duration-200 ease-linear hover:opacity-70 disabled:opacity-100 
        ${loading ? "opacity-70 [&>span]:!text-transparent" : ""} ${btnColor} ${className}`}
      >
        {/*Iconが設定されている時はspanタグ中でIconコンポーネント(組み込み)を呼び出し、propsとしてsizeを18として渡す*/}
        {Icon && (
          //ちな、Iconはどこにも使われていない。でもButtonとIconは割とセットで使いがちなので残している。
          //Iconコンポーネントはどこで定義してるんや、、
          <span>
            <Icon size={18} />
          </span>
        )}
        {/* spanタグ中にpropsで受け取ったlabelを追加。 */}
        <span>{label}</span>
        {/* loading中はButtonLoading（後ほど定義）を表示 */}
        {loading && <ButtonLoading />}
      </button>
      {/* loading中はLoadingLayer（後ほど定義）を上乗せして、再度押せないようにする */}

      {loading && <LoadingLayer />}
    </>
  );
};

export default Button;

// ボタンのローディングアイコン
//ButtonLoading関数を定義
const ButtonLoading = () => {
  //CN: absolute text-center align-middleのdivを作る。
  //そのdivの中で、ImSpinner7コンポーネントを表示。propsとしてsize: 18px, CN: animate-spinを渡す。
  return (
    <div className="absolute text-center align-middle">
      <ImSpinner7 size="18px" className="animate-spin" />
    </div>
  );
};

// ローディング中に画面をクリックできないようにする
//LoadingLayer関数を定義。
//divタグでCN: fixed top-0 left-0 z-[999] h-screen w-screen bg-transparentにする
//ちな、div CN="class" />で行ける。
const LoadingLayer = () => {
  return <div className="fixed left-0 top-0 z-[999] h-screen w-screen bg-transparent" />;
};
//上にdivを重ねて、クリックできないようにしている。buttonタグを直接clickできないよう設定してもよいが、こっちのほうが多分速いからそうしていると思われ。
