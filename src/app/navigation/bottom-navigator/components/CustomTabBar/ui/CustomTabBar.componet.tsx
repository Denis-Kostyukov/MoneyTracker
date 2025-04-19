import {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import getStyles from 'app/navigation/bottom-navigator/components/CustomTabBar/ui/CustomTabBar.styles.ts';
import {CustomText} from 'shared/components';
import {Theme} from 'shared/lib';

interface CustomTabBarProps extends BottomTabBarProps {
  theme: Theme;
}

const CustomTabBar: FC<CustomTabBarProps> = ({theme, ...props}) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const styles = getStyles(theme.background, theme.border);

  return (
    <View style={[styles.container]}>
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.reset({index: 0, routes: [{name: route.name}]});
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={0.5}
            onPress={onPress}
            style={styles.button}>
            <CustomText style={isFocused && styles.focusedText}>
              {capitalize(route.name)}
            </CustomText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
