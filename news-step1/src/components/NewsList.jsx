import React from 'react'
//리액트에서는 props를 지원하는데 component와 component사이에서 주소번지 원본을 넘겨받을 수 있다.
const NewsList = (props) => {
  //구조분해 할당
  const {newsList} = props;
  console.log(newsList)
  return (
    <>
      <ul>
        {
          Object.keys(newsList).map(key => {
            return (
              <li key={key}>
                <a href={newsList[key].url}>{newsList[key].title}</a>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default NewsList