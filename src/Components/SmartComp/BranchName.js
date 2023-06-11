import React from 'react'
import './BranchName.css';

export default function BranchName({ branchname, selected }) {
  return (
    <div className="branch">
    <div>{branchname}</div>
    <div className={"selectioncircle" + (selected ? " selected" : "")} ></div>
</div>
  )
}
