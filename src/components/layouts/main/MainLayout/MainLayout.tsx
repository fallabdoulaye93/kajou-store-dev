import React, { useEffect, useState } from 'react';
import { Header } from '../../../header/Header';
import MainContent from '../MainContent/MainContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout: React.FC = () => {

  return (
    <S.LayoutMaster>
      <S.LayoutMain>
        <MainContent id="main-content">
          <div>
            <Outlet />
          </div>
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
