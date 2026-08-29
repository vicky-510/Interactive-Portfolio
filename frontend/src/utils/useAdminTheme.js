import { useEffect } from 'react';
import { useGetProfileQuery } from '../slices/adminApiSlice';

function applyTheme(theme) {
  const resolved =
    theme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;

  document.documentElement.setAttribute('data-theme', resolved);
}

export default function useAdminTheme() {
  const { data: profile } = useGetProfileQuery();

  useEffect(() => {
    if (profile?.theme) applyTheme(profile.theme);
  }, [profile?.theme]);
}
