import React, { useState, useEffect } from 'react';
import CustomLayout from 'components/CustomLayout';
import { useNavigation } from '@react-navigation/native';
import { STACK_NAME } from 'consts/configs';
import ListDiaries from 'components/ListDiaries';
import { getNewsfeed } from 'utils/firebase';

export default (props) => {
  const navigation = useNavigation()
  const [data, setData] = useState([]);

  useEffect(() => {
    _onRefresh()
  }, [])

  const _onRefresh = async () => {
    try {
      const notes = await getNewsfeed(data[data.length-1]);
      const _data = data;
      _data.push(
        ...Object.values(
          notes.docs
        )
      )
      setData(_data)
    } catch (error) {
      console.log(error)
    }
  }

  const _onPressCreateNote = () => {
    navigation.navigate(STACK_NAME.CREATE_NOTE)
  }

  return (
    <CustomLayout
      onButtonPress={_onPressCreateNote}
    >
      <ListDiaries
        data={data}
        marginTop={68}
        onRefresh={_onRefresh}
      />
    </CustomLayout>
  )
}