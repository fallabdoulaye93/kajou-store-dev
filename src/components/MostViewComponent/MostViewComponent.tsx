import React, { useEffect, useState } from 'react';
import * as Style from './MostViewComponent.styles';
import Select from 'react-select';
import { MostViewItem } from '@app/components/common/MostViewItem/MostViewItem';
import * as  API from '@app/api/store.api';



export const MostViewComponent: React.FC = () => {
  const [seed, setSeed] = useState<any>();


  const getAllSeed = async () => {
    const resp =  await API.__getAllSeed();
    setSeed(resp)
    }
  
  useEffect(() => {
    getAllSeed()
  },[]);

  return (
    <Style.MostViewComponentWrapper>

        <Style.Dropdown>

            <Select
              isSearchable={false}
              placeholder='Thematique'
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={colourStyles} />
              
        </Style.Dropdown>

        {seed?.map((item: any, key: any) => (
          <div>
            <MostViewItem MostViewItemData={item.fields} key={key} />
          </div>
        ))}

    </Style.MostViewComponentWrapper>
  );
};
const options = [
  
  { value: 'Education', label: 'Education' },
  { value: 'Sante', label: 'Sante' },
];

const colourStyles = {
  control: (base: any, state: any) => ({
    ...base,
    background: state.isFocused ? "#4ABC96" : "#FFFFFF"
  }),
  option: (provided: any) => ({
    ...provided,
    color: 'black'
  }),

};