import React, { FunctionComponent, useState } from 'react';
import InfoList from "./InfoList/InfoList";
import InfoListForm from "./InfoListForm/InfoListForm";
import style from "./SecondaryInfo.module.css";

const SecondaryInfo: FunctionComponent = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={style.secondaryInfo}>

      {editMode ? 
        <InfoListForm setEditMode={setEditMode} editMode={editMode}/> :
        <InfoList  setEditMode={setEditMode} editMode={editMode}/>}
    </div>
  )
}

export default SecondaryInfo;
