import { Switch } from 'react-native';
import { styles } from './style';

function Toggle({ value, onChange }) {
  return (
    <Switch
      style={styles.toggle}
      value={value}
      onValueChange={onChange} />
  );
}

export default Toggle;