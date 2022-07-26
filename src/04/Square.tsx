// import React from 'react'
// class Square extends React.Component<{ onClick: any, value: any }> {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button >
//     )
//   }
// }

// 함수 컴포넌트는 state 없이 render만 존재
function Square(props: any) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button >
  )
}

export default Square