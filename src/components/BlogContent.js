import React from "react";

function BlogContent(props) {
  console.log(props); 
  /*{ articleText: "Dear Reader: Bjarne Stroustrup has the perfect lecture oration." 
  isPublished=true
  minutesToRead= 1 
}
*/


if (!props.isPublished) {
  //hide the published content
  //return null means "don't  display any DOM element here"
  return null;
}
else {
  //Show pulished content

  return (
   <div id="blog-content">
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead} minutes to read</p>
   </div>
  );
}
}
export default BlogContent;
