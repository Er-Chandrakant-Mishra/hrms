import React from 'react';

import { useTranslation } from 'react-i18next';
const PageNotFound = () => {
  const { t } = useTranslation(['pageNotFound', 'home']);

  return (

    <div className="pageNotFound">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-2 col-xs-1" />
          <div className="col-md-6 col-sm-8 col-xs-10 text-center">
            <div className="pageNotFound__errorNumber">
            <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
                <h3>404</h3>
            </div>
            <div className="pageNotFound__errSubText">
              {t('pageNotFound:errorMsg')}
            </div>
            <div className="pageNotFound__homeLink">
              <a href="/">{t('home:home')}</a>
            </div>
          </div>
          <div className="col-md-3 col-sm-2 col-xs-1" />
        </div>
      </div>
    </div>
    
  );
};

export default PageNotFound;
