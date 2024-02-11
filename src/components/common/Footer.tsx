import Container from "@/components/common/parts/Container";

//フッターのコンポーネント。

const Footer = (): JSX.Element => {
  return (
    //footer: mt-20 w-full bg-theme-light py-4, 子要素はContainer, 中身は<nav>
    <footer className="bg-theme-light mt-20 w-full py-4">
      <Container>
        {/* ナビゲーション */}
        <nav></nav>
      </Container>
    </footer>
  );
};

export default Footer;
