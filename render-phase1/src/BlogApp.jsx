import { useCallback, useEffect, useState } from "react";
import RenderingUI from "./components/RenderingUI";

const BlogApp = () => {
  const [state, setState] = useState(0);
  console.log("1");
  const handleClick = () => {
    console.log("button clicked");
  }
  const memoizationCallback = useCallback(() => {
    handleClick();
  },[])
  useEffect(() => {
    console.log("Component re-redered");
    setTimeout(() => {
      setState(1);
      console.log("Updated");
    },100)
  },[])
  return (
    <>
      <RenderingUI onClick={memoizationCallback} />  
    </>
  );
}

export default BlogApp;
