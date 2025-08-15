import { Input } from '../components/ui/input';
import { RecipeList } from '../components/RecipeList';
export const Home = () => {
  return (
    <div className="flex flex-col items-center min-w-full min-h-screen ">
      <div className="flex flex-col p-4 items-center w-full">
        <section className="flex flex-col gap-4 w-full">
          <Input placeholder="Search for recipes" className="bg-accent" />
          <RecipeList />
        </section>
      </div>
    </div>
  );
};
