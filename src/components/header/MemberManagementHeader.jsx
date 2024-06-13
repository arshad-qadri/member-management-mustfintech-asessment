import React from 'react'

const MemberManagementHeader = () => {
  return (
    <div className='MemberManagementHeader'>
        <div className="MemberManagementHeader-left">
            <span style={{fontSize:"20px", fontWeight:"bold"}}>회원 목록</span> <span style={{fontSize:"18px", opacity:.9, marginLeft:10}}>(총 100명 | 승인대기 10명)</span>
        </div>
        <div className="MemberManagementHeader-right"></div>
    </div>
  )
}

export default MemberManagementHeader