import { useState, useEffect, useCallback } from 'react';

const normalizePath = (rawPath) => {
  if (!rawPath || rawPath === '/') return '/';
  return rawPath.replace(/\/+$/, '') || '/';
};

export function useRouter() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to) => {
    const [pathPart, hashPart] = to.split('#');
    const targetPath = normalizePath(pathPart || '/');
    const currentPath = normalizePath(window.location.pathname);

    if (targetPath !== currentPath) {
      const nextUrl = hashPart ? `${targetPath}#${hashPart}` : targetPath;
      window.history.pushState({}, '', nextUrl);
      setPathname(targetPath);

      if (hashPart) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const target = document.getElementById(hashPart);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      return;
    }

    if (hashPart) {
      const target = document.getElementById(hashPart);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, '', `${targetPath}#${hashPart}`);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const projectMatch = pathname.match(/^\/projects\/([a-z0-9-]+)$/i);
  const projectSlug = projectMatch ? projectMatch[1] : null;
  const isHome = pathname === '/';

  return {
    pathname,
    isHome,
    projectSlug,
    navigate,
  };
}
