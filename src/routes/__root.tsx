import { Header } from '@/components/Header';
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-row w-screen">
        <div className="w-auto p-1 border h-screen">
          <Header />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
