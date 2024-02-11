import Button from "@/components/common/parts/Button";
import CommonDialog from "@/components/common/parts/CommonDialog";
import { DialogTypes } from "@/hooks/atom/messageDialog";
// import { useMessageDialog } from "@/hooks/common/useMessageDialog";

const MessageDialog = (): JSX.Element => {
  // const { dialog } = useMessageDialog();
  // const { title, content, dialogType, isOpen, actions, labels } = dialog;

  // 確認メッセージ、本文あり
  // if (dialogType == DialogTypes.Confirm && content) {
  //   return (
  //     <CommonDialog
  //       isOpen={isOpen}
  //       handleClose={actions[1].handleClick}
  //       className="flex max-w-sm flex-col items-center"
  //     >
  //       <h2 className="text-h3">{title}</h2>
  //       <p className="text-body1 mt-4">{content}</p>
  //       <div className="mt-6 flex justify-center gap-x-2">
  //         <Button
  //           variant="primary"
  //           label={labels?.[0] ? labels[0] : "はい"}
  //           onClick={actions[0].handleClick}
  //         />
  //         <Button
  //           variant="text"
  //           label={labels?.[1] ? labels[1] : "いいえ"}
  //           onClick={actions[1].handleClick}
  //         />
  //       </div>
  //     </CommonDialog>
  //   );
  // }

  // // 確認メッセージ、本文なし
  // if (dialogType == DialogTypes.Confirm && content == undefined) {
  //   return (
  //     <CommonDialog
  //       isOpen={isOpen}
  //       handleClose={actions[1].handleClick}
  //       className="flex max-w-sm flex-col items-center"
  //     >
  //       <h2 className="text-h3">{title}</h2>
  //       <div className="mt-6 flex justify-center gap-x-2">
  //         <Button
  //           variant="primary"
  //           label={labels?.[0] ? labels[0] : "はい"}
  //           onClick={actions[0].handleClick}
  //         />
  //         <Button
  //           variant="text"
  //           label={labels?.[1] ? labels[1] : "いいえ"}
  //           onClick={actions[1].handleClick}
  //         />
  //       </div>
  //     </CommonDialog>
  //   );
  // }

  // // 通知メッセージ、本文あり
  // if (dialogType == DialogTypes.Message && content) {
  //   return (
  //     <CommonDialog
  //       isOpen={isOpen}
  //       handleClose={actions[0].handleClick}
  //       className="flex max-w-sm flex-col items-center"
  //     >
  //       <h2 className="text-h3">{title}</h2>
  //       <p className="text-body1 mt-4">{content}</p>
  //       <div className="mt-6 flex justify-center gap-x-2">
  //         <Button variant="text" label="OK" onClick={actions[0].handleClick} />
  //       </div>
  //     </CommonDialog>
  //   );
  // }

  // // 通知メッセージ、本文なし
  // if (dialogType == DialogTypes.Message && content == undefined) {
  //   return (
  //     <CommonDialog
  //       isOpen={isOpen}
  //       handleClose={actions[0].handleClick}
  //       className="flex max-w-sm flex-col items-center"
  //     >
  //       <h2 className="text-h3">{title}</h2>
  //       <div className="mt-6 flex justify-center gap-x-2">
  //         <Button variant="text" label="OK" onClick={actions[0].handleClick} />
  //       </div>
  //     </CommonDialog>
  //   );
  // }

  // // エラーメッセージ、本文あり
  // if (dialogType == DialogTypes.Error && content) {
  //   return (
  //     <CommonDialog
  //       isOpen={isOpen}
  //       handleClose={actions[0].handleClick}
  //       className="flex max-w-sm flex-col items-center"
  //     >
  //       <h2 className="text-h3">{title}</h2>
  //       <p className="text-body1 mt-4">{content}</p>
  //       <div className="mt-6 flex justify-center gap-x-2">
  //         <Button variant="text" label="OK" onClick={actions[0].handleClick} />
  //       </div>
  //     </CommonDialog>
  //   );
  // }

  // エラーメッセージ、本文なし
  // return (
  //   <CommonDialog
  //     isOpen={isOpen}
  //     handleClose={actions[0].handleClick}
  //     className="flex max-w-sm flex-col items-center"
  //   >
  //     <h2 className="text-h3">{title}</h2>
  //     <div className="mt-6 flex justify-center gap-x-2">
  //       <Button variant="text" label="OK" onClick={actions[0].handleClick} />
  //     </div>
  //   </CommonDialog>
  // );
  return (
    <CommonDialog
    className="flex max-w-sm flex-col items-center"
    canCloseOtherClick>
      <h2>dialog</h2>
    </CommonDialog>
  );
};

export default MessageDialog;
