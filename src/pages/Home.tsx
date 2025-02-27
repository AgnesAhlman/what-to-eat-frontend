import { Input } from '../components/ui/input';
import { RecipeList } from '../components/ui/RecipeList';
export const Home = () => {
  return (
    <div className="flex flex-col items-center min-w-full min-h-screen ">
      <div className="flex flex-col p-4 items-center w-full">
        <div>
          <img src="/logo.png" alt="logo" className="max-w-xs" />
        </div>
        <section className="flex flex-col gap-4 w-full">
          <Input placeholder="Search for recipes" />
          <RecipeList />
        </section>
      </div>
    </div>
  );
};
