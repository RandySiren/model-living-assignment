import './Header.scss';

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps): JSX.Element => {
  return <div className={'header'}>{text}</div>;
};

export default Header;
