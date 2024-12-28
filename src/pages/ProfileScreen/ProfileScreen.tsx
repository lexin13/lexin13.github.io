import React, { FC } from 'react';
//import { useTranslation } from 'react-i18next';
import { SettingsBlock } from './SettingsBlock';
import { Page } from '../../shared/common/Page'
import s from './ProfileScreen.sass';

export const ProfileScreen: FC = () => {
  return (
    <Page title={"Profile"}>
      <SettingsBlock className={s.block} />
    </Page>
  );
};

export default ProfileScreen;
