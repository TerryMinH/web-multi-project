/*
 * @Author: TerryMin
 * @Date: 2025-04-06 22:02:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-11 08:43:26
 * @Description: file not
 */
import React, { useState, useEffect, lazy, Suspense } from "react";

const PlaysGroundChild = (props) => {
  // console.log(props);
  const { tabIds, getHeader, renderContent } = props;
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  return (
    <>
      {tabIds.map((tabId) => (
        <button key={tabId} onClick={() => setSelectedId(tabId)}>
          {getHeader(tabId)}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{getHeader(selectedId)}</h3>
        {renderContent(selectedId)}
      </div>
    </>
  );
};
export default PlaysGroundChild;
