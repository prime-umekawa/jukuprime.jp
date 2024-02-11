//MouseEventHandlerをimport
import { MouseEventHandler } from 'react';
//react-icons/riからRiCheckboxFill, RiCheckboxBlankLineをimport
import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri';

//CommonCheckboxのpropsの型を定義
/*onclick: 型変数はdivElement[optional]
 *checked:
 *size
 *divProps: divがとりうる属性を許容[optional]
 */

type CommonCheckboxProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  checked: boolean;
  size: number;
  divProps?: React.HTMLAttributes<HTMLDivElement>;
};

//CommonCheckbox関数を設定。
const CommonCheckbox = (props: CommonCheckboxProps): JSX.Element => {
  //propsを分割代入で定義
  const { onClick, checked, size, divProps } = props;
  return (
    //divタグでdivPropsとonClickイベントをとる。divPropsはたくさんある。
    <div {...divProps} onClick={onClick}>
      {checked ? ( //チェックされてたら、RiCheckboxFillコンポーネントを表示。sizeはsize, CNはtext-primary
        <RiCheckboxFill size={size} className="text-primary" />
      ) : (
        //チェックされてなかったらRiCheckboxBlankLineコンポーネントを表示。sizeはsize, CNはtext-theme-medium
        <RiCheckboxBlankLine size={size} className="text-theme-medium" />
      )}
    </div>
  );
};

export default CommonCheckbox;