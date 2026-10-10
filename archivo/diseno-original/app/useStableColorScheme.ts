'use client';

import { useSyncExternalStore } from 'react';
import { useMantineColorScheme } from '@mantine/core';

const subscribe = () => () => {};

// El servidor siempre renderiza en oscuro (el tema por defecto). Para que el HTML
// del servidor y el primer render del cliente coincidan, devolvemos 'dark' hasta
// hidratar y recién ahí aplicamos el tema que eligió el usuario.
export function useStableColorScheme() {
  const { colorScheme, toggleColorScheme, setColorScheme } = useMantineColorScheme();
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  return { colorScheme: hydrated ? colorScheme : 'dark', toggleColorScheme, setColorScheme };
}
