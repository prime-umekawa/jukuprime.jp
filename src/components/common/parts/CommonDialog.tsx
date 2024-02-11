//子要素を使うので、それ用の型をimportする
import { ReactNode } from "react";

//propsの型定義
/*
 *isOpen
 *handleClose
 *CN[optional]
 *children: 型はわかるね?
 *canCloseOtherClick[optional]→これは、dialogを閉じるとき、閉じるボタンを押さなくても、dialog以外の部分を押すことによって閉じることができる仕様。課題中ではすべてfalseになっている。
 */

// ※optionalに変更したところもあるよ。
type CommonDialogProps = {
  isOpen?: boolean;
  handleClose?: () => void;
  className?: string; // tailwind の max-x-* クラスなどを設定する
  children?: ReactNode;
  canCloseOtherClick?: boolean;
};
//CommonDialog関数を定義
const CommonDialog = (props: CommonDialogProps): JSX.Element => {
  //propsを設定
  const {
    isOpen,
    handleClose,
    className = "max-w-xl",
    children,
    canCloseOtherClick = true,
  } = props;
  return (
    //モーダルのdialog以外の部分をdivタグで作る。デフォルトのCNはfixed top-0 left-0 z-[100] flex h-full w-full items-center justify-center bg-black/30 transition-all duration-200
    //CN追加で、dialogがOpenしてたらvisible block opacity-100、openしてなかったらinvisible opacity-0
    //クリックしたら、canCloseOtherClickがtrueの時のみ閉じる。
    <div
      className={`fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-black/30 transition-all duration-200 ${
        isOpen ? "visible block opacity-100" : "invisible opacity-0"
      }`}
      //これ、canCloseOtherClickできなくね??
      onClick={canCloseOtherClick ? handleClose : undefined}
    >
      {/* 子要素なので浮き出る */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative m-4 max-h-[calc(100vh-2rem)] w-full overflow-y-auto rounded-lg bg-white p-8 md:m-10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CommonDialog;
