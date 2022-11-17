import React from 'react';
import { useTranslation } from 'react-i18next';
import {Loading} from "@app/components/common/Loading";

const LoadingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Loading/>
    </>
  );
};

export default LoadingPage;
