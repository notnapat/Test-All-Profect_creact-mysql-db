// // import React from "react";
// import "./SlideTop.css";

// // function SlideTop() {
// //     return (
// //         <div className="slide-top">
// //             <img
// //                 src={require("../../images/background/intel-core-2022_1920.1080.png")}
// //                 alt="review cpu intel and amd"
// //                 className="image"
// //             />
// //             <img
// //                 src={require("../../images/background/7000.png")}
// //                 alt="review cpu amd"
// //                 className="image"
// //             />
// //             <img
// //                 src={require("../../images/background/ryzen_7000_onbord.png")}
// //                 alt="review nvidia"
// //                 className="image"
// //             />
// //         </div>
// //     );
// // }

// // export default SlideTop;

// import React, { useState } from "react";
// // import "./ClickSlide.css";

// function ClickSlide() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const handleSlideClick = () => {
//     // Increment the slideIndex by 1 (or reset to 0 if it reaches the end)
//     setSlideIndex((slideIndex + 1) % 3);
//   };

//   return (
//     <div className="slide-top" onClick={handleSlideClick}>
//       <img
//         src={require("../../images/background/intel-core-2022_1920.1080.png")}
//         alt="review cpu intel and amd"
//         className={slideIndex === 0 ? "image active" : "image"}
//       />
//       <img
//         src={require("../../images/background/7000.png")}
//         alt="review cpu intel and amd"
//         className={slideIndex === 1 ? "image active" : "image"}
//       />
//       <img
//         src={require("../../images/background/ryzen_7000_onbord.png")}
//         alt="review cpu intel and amd"
//         className={slideIndex === 2 ? "image active" : "image"}
//       />
//     </div>
//   );
// }

// export default ClickSlide;
