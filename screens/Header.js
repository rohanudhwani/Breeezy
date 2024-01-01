import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header theme={{colors:{primary:"#00aaff"}}}>
      <Appbar.Content title={props.name} titleStyle={{ color: "white", textAlign: "center"}} />
    </Appbar.Header>
  );
};

export default Header;