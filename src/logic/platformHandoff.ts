"use client";

function platformHandoff(name: string) {

  const url = new URL(`/handoff?name=${encodeURIComponent(name)}`, window.location.href);
  window.open(url.href)

}

export default platformHandoff;