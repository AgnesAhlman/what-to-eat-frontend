import { Header } from '@/components/Header';
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen">
      <div className="w-full md:w-auto p-1 border md:h-screen">
        <Header />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  ),
});
