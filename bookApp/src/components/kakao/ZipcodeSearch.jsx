import React, { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode';

const ZipcodeSearch = () => {
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  }
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddress(fullAddress);
    setIsOpen(false);
    setZipcode(data.zonecode);

  };
  return (
    <>
      <div style={{margin: '20px'}}>
        <div style={{marginBottom: '10px'}}>
          <input type="text" style={{width: '290px'}}></input>
          <button type='button' onClick={handleClick}>주소찾기</button>
        </div>
        <div style={{marginBottom: '10px'}}>
          <label>우편번호</label>
          <input value={zipcode} type="text" readOnly  style={{width: '300px', marginLeft: '5px'}}/>
        </div>
        <div style={{marginBottom: '10px'}}>
          <label> 주 소 </label>
          <input value={address} type="text" readOnly style={{width: '300px', marginLeft: '31px'}}/>
        </div>
        <div style={{marginBottom: '10px'}}>
          <label>상세주소</label>
          <input type="text" style={{width: '300px', marginLeft: '5px'}}></input>
        </div>
        {isOpen && (
          <div>
            <DaumPostcodeEmbed onComplete={handleComplete} />
          </div>
        )}
      </div>
    </>
  )
}

export default ZipcodeSearch