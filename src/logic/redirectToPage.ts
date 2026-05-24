function redirectToPage(url: string) {

  console.log
  if (location.pathname == `/${url}`) {
    return;
  } else {
    location.pathname = `/${url}`
  }

}

export default redirectToPage;