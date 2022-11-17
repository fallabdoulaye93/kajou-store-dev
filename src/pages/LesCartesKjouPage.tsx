import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '@app/components/Error/Error';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import error404 from '@app/assets/images/error404.svg';
import {LesCartesKajouComponent} from "@app/components/LesCartesKajouComponent/LesCartesKajouComponent";

const LesCartesKjouPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LesCartesKajouComponent />
    </>
  );
};

export default LesCartesKjouPage;
