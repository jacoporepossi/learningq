// Redirect mapping: old URLs to new URLs
const redirects = {
    "/learningq/kaggle/competitions/data%20visualization/data%20science/2022/12/01/follow-the-flow-surveys-with-alluvial-plots.html":
      "/learningq/posts/2022-12-01-follow-the-flow-surveys-with-alluvial-plots/index.html",
  };
  
  // Get the current pathname
  const path = window.location.pathname;
  
  // Check if the current path matches a redirect
  if (redirects[path]) {
    // Redirect the user to the new path
    window.location.replace(redirects[path]);
  }