import React from 'react';
import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';

//SFC로 변환
export default () => {
  return (
    <div>
      <PrivateHeader title="링크 페이지"/>
      <div className="page-content">
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};
