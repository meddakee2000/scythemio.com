import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

function redirectToPage(url: string, router: AppRouterInstance) {
  if (!router) return;
  
  if (window.location.pathname === `/${url}`) {
    return;
  } else {
    router.push(`/${url}`);
  }
}

export default redirectToPage;