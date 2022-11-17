import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import { withLoading } from '@app/hocs/withLoading.hoc';
import PrefUserPage1 from '@app/pages/PrefUsersPages/PrefUserPage1';
import PrefUserPage2 from '@app/pages/PrefUsersPages/PrefUserPage2';
import PrefUserPage3 from '@app/pages/PrefUsersPages/PrefUserPage3';
import HomePage from "@app/pages/HomePage/HomePage";
import {DetailsCarteComponent} from "@app/components/DetailsCarteComponent/DetailsCarteComponent";
import {DetailsSeedComponent} from "@app/components/DetailsSeedComponent/DetailsSeedComponent";
import {DossierThematique} from "@app/pages/DossierThematique";
import RedirectPage from "@app/pages/RedirectPage";

const Error404Page = React.lazy(() => import('@app/pages/Error404Page'));

export const ROOT_PATH = '/';
export const HOME_PATH = '/home';
export const PAGE_PREFERENCES_UTILISATEUR_1_PATH = '/pref-user-1';
export const PAGE_PREFERENCES_UTILISATEUR_2_PATH = '/pref-user-2';
export const PAGE_PREFERENCES_UTILISATEUR_3_PATH = '/pref-user-3';
export const PAGE_DETAIL_CARTE_KAJOU = '/detail-carte';
export const PAGE_DETAIL_SEED = '/detail-seed';
export const PAGE_DOSSIER_THEMATIQUE = '/dossier-thematique';


const PrefPage1 = withLoading(PrefUserPage1);
const PrefPage2 = withLoading(PrefUserPage2);
const PrefPage3 = withLoading(PrefUserPage3);


// UI Components
const Error404 = withLoading(Error404Page);

export const AppRouter: React.FC = () => {
  const protectedLayout = (
      <MainLayout />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT_PATH} element={protectedLayout}>
          <Route index element={<RedirectPage />} />
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={PAGE_PREFERENCES_UTILISATEUR_1_PATH} element={<PrefPage1 />} />
          <Route path={PAGE_PREFERENCES_UTILISATEUR_2_PATH} element={<PrefPage2 />} />
          <Route path={PAGE_PREFERENCES_UTILISATEUR_3_PATH} element={<PrefPage3 />} />
          <Route path={PAGE_DETAIL_CARTE_KAJOU} element={<DetailsCarteComponent />} />
          <Route path={PAGE_DETAIL_SEED} element={<DetailsSeedComponent />} />
          <Route path={PAGE_DOSSIER_THEMATIQUE} element={<DossierThematique />} />
          <Route path="404" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
