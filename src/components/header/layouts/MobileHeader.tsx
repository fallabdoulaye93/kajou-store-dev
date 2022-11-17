import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import { HeaderFullscreen } from '../components/HeaderFullscreen/HeaderFullscreen';
import * as S from '../Header.styles';

interface DesktopHeaderProps {
}

export const MobileHeader: React.FC<DesktopHeaderProps> = ({}) => {
  const centerSide = (
      <>
          <Col span={24} xxl={8}>
              <HeaderSearch />
          </Col>
      </>
  );

  return (
    <Row align="middle">
      {centerSide}
    </Row>
  );
};
