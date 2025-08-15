import { Input } from '../components/ui/input';
import { RecipeList } from '../components/RecipeList';
export const Home = () => {
  return (
    <div className="flex flex-col items-center min-w-full min-h-screen ">
      <div className="flex flex-col p-4 items-center w-full">
        <section className="flex flex-col gap-4 w-full p-2">
          <Input
            placeholder="Search for recipes"
            className="bg-accent max-w-2/5"
          />
          <RecipeList />
        </section>
      </div>
    </div>
  );
};
