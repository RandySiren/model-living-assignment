import styles from './Header.module.css';

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps): JSX.Element => {
  return <div className={styles.Header}>{text}</div>;
};

export default Header;
