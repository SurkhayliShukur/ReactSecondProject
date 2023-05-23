// import React from "react";

// const Service = () => {
//   const [title, setTitle] = React.useState("");
//   const [bodytext, setBodyText] = React.useState("");
//   const testRef = React.useRef()



//   React.useEffect(() => {
//     testRef.current.focus()
//   },[])



//   return (
//     <div className="d-flex justify-content-center">
//       <form className="form-group w-25" onSubmit={add}>
//         <label>Title</label>
//         <input
//           onChange={(e) => setTitle(e.target.value)}
//           ref={testRef}
//           value={title}
//           className="form-control"
//           type="text"
//         />
//         <label>Body</label>
//         <input
//           onChange={(e) => setBodyText(e.target.value)}
//           value={bodytext}
//           className="form-control"
//           type="text"
//         />
//         <button  type="submit" className="btn btn-primary w-100 mt-2">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Service;
