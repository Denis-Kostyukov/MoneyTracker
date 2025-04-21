import {FlatList, TouchableOpacity, View} from 'react-native';
import {ReactNode} from 'react';
import getStyles from 'shared/components/RadioList/ui/RadioList.styles.ts';
import {useTheme} from 'shared/providers';

interface RadioListProps<T> {
  items: T[];
  renderContent: (item: T) => ReactNode;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  scrollEnabled?: boolean;
}

const RadioList = <T,>({
  items,
  renderContent,
  selectedIndex,
  setSelectedIndex,
  scrollEnabled = false,
}: RadioListProps<T>) => {
  const {theme} = useTheme();

  const styles = getStyles(theme.border);

  return (
    <FlatList
      contentContainerStyle={styles.listContentContainer}
      scrollEnabled={scrollEnabled}
      data={items}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => setSelectedIndex(index)}>
          <View style={styles.radioButtonWrapper}>
            {index === selectedIndex ? (
              <View style={styles.radioButtonInner} />
            ) : null}
          </View>
          {renderContent(item)}
        </TouchableOpacity>
      )}
    />
  );
};

export default RadioList;
